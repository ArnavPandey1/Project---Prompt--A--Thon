# Render Deployment Checklist

## ✅ Pre-Deployment Setup

### 1. Fix Your Gemini API Key
**IMPORTANT**: Your current API key is invalid. Before deploying:
- Go to https://aistudio.google.com/app/apikey
- Generate a new API key
- Save it securely (you'll need it for Render environment variables)

### 2. Verify MongoDB Atlas
- [ ] Login to MongoDB Atlas
- [ ] Go to Network Access
- [ ] Add IP Address: `0.0.0.0/0` (Allow access from anywhere)
- [ ] Copy your connection string

### 3. Generate JWT Secret
Run this command to generate a secure secret:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```
Or use: https://generate-secret.vercel.app/32

## 🚀 Deployment Steps

### Option A: Blueprint (Easiest - Uses render.yaml)

1. **Push to GitHub**
   ```bash
   cd "c:/Users/pande/OneDrive/Documents/Project - Prompt--A--Thon"
   git add .
   git commit -m "Add Render deployment config"
   git push origin main
   ```

2. **Deploy on Render**
   - Go to https://dashboard.render.com
   - Click "New +" → "Blueprint"
   - Select your repository
   - Render auto-detects `server/render.yaml`
   - Click "Apply"

3. **Set Environment Variables**
   In Render dashboard, add:
   - `MONGODB_URI`: (your MongoDB connection string)
   - `JWT_SECRET`: (generated secret from step 3 above)
   - `GEMINI_API_KEY`: (your NEW valid API key)

### Option B: Manual Web Service

1. Go to https://dashboard.render.com
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: timemap-backend
   - **Root Directory**: `server`
   - **Runtime**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: Free

5. Add environment variables (same as Option A, step 3)

## 🔍 Post-Deployment Verification

### Test Your Deployment
Once deployed, your backend URL will be something like:
```
https://timemap-backend.onrender.com
```

Test the health endpoint:
```bash
curl https://timemap-backend.onrender.com/health
```

Expected response:
```json
{"status":"ok","message":"TimeMap API is running"}
```

### Update Frontend
Update your frontend's API URL to point to your Render backend:
- In `client/src/services/api.ts`
- Change `API_URL` to your Render backend URL

## ⚠️ Known Issues & Solutions

### Issue: "API_KEY_INVALID"
**Solution**: You need a valid Gemini API key
- Get one from: https://aistudio.google.com/app/apikey
- Update in Render environment variables
- Redeploy the service

### Issue: "Cannot connect to MongoDB"
**Solution**: Check MongoDB Atlas IP whitelist
- Must include `0.0.0.0/0`
- Verify connection string format

### Issue: "Service takes 30+ seconds to respond"
**Solution**: This is normal on Render free tier
- Service spins down after 15 minutes of inactivity
- First request wakes it up (~30 seconds)
- Subsequent requests are fast

## 📝 Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port (auto-set by Render) | `10000` |
| `NODE_ENV` | Environment mode | `production` |
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/timemap` |
| `JWT_SECRET` | Secret for JWT tokens | `base64-encoded-random-string` |
| `GEMINI_API_KEY` | Google AI API key | `AIza...` |

## 🎯 Next Steps After Deployment

1. Test all API endpoints
2. Update frontend to use production backend URL
3. Deploy frontend (Vercel/Netlify recommended)
4. Test end-to-end functionality
5. Monitor Render logs for any errors

## 💡 Tips

- Free tier sleeps after 15 min inactivity
- Use Render's "Keep Alive" feature or a cron job to ping your service
- Check logs in Render dashboard if something breaks
- Environment variables can be updated without redeploying
