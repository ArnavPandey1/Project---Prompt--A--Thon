# 🎉 Backend is Live!

Your backend is successfully deployed at:
**https://timemap-backend.onrender.com**

Health check: ✅ Working!

---

## 🚀 Deploy Frontend to Vercel (Recommended)

### Step 1: Prepare for Deployment

The frontend is already configured! I've created:
- ✅ `.env.production` - Points to your live backend
- ✅ `.env.development` - Points to localhost for local dev

### Step 2: Deploy to Vercel

#### Option A: Using Vercel CLI (Fastest)

```bash
# Install Vercel CLI globally (if not already installed)
npm install -g vercel

# Navigate to client directory
cd client

# Deploy!
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? timemap (or your choice)
# - Directory? ./ (current directory)
# - Override settings? No

# For production deployment:
vercel --prod
```

#### Option B: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

5. **Environment Variables** (Important!):
   - Add: `VITE_API_URL` = `https://timemap-backend.onrender.com`

6. Click **"Deploy"**

### Step 3: Test Your Live App!

Once deployed, Vercel will give you a URL like:
```
https://timemap-xyz123.vercel.app
```

Test it:
1. Open the URL
2. Sign up / Login
3. Add a task
4. Watch the AI analyze it! 🤖

---

## 🌐 Alternative: Deploy to Netlify

### Using Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect your GitHub repository
4. Configure:
   - **Base directory**: `client`
   - **Build command**: `npm run build`
   - **Publish directory**: `client/dist`

5. **Environment Variables**:
   - `VITE_API_URL` = `https://timemap-backend.onrender.com`

6. Click **"Deploy site"**

---

## 🧪 Test Locally with Production Backend

Want to test the production backend locally?

```bash
cd client

# Create a local .env file
echo "VITE_API_URL=https://timemap-backend.onrender.com" > .env.local

# Restart dev server
npm run dev
```

Your local frontend will now use the live backend!

---

## 📊 Current Setup

| Component | Status | URL |
|-----------|--------|-----|
| Backend | ✅ Live | https://timemap-backend.onrender.com |
| Frontend | 🚀 Ready to deploy | TBD |
| Database | ✅ MongoDB Atlas | Connected |
| AI Service | ✅ Gemini 2.0 Flash | Working |

---

## 🎯 Post-Deployment Checklist

After deploying frontend:

- [ ] Test user registration
- [ ] Test login/logout
- [ ] Create a task and verify AI analysis
- [ ] Test AI prioritization
- [ ] Set a reminder and verify alarm works
- [ ] Test focus timer
- [ ] Check all pages load correctly

---

## 🐛 Troubleshooting

### "Cannot connect to backend"
- Verify `VITE_API_URL` is set correctly in Vercel/Netlify
- Check backend is running: https://timemap-backend.onrender.com/health

### "CORS errors"
- Backend CORS is already configured to allow all origins
- If issues persist, check browser console for exact error

### "AI not working"
- Backend AI is working (Gemini 2.0 Flash configured)
- Check Render logs if issues occur

---

## 💡 Pro Tips

### Keep Backend Awake
Render free tier sleeps after 15 minutes. To keep it awake:

1. Use a service like [cron-job.org](https://cron-job.org)
2. Set up a job to ping: `https://timemap-backend.onrender.com/health`
3. Run every 10 minutes

### Custom Domain
Both Vercel and Netlify support custom domains for free!

### Environment Variables
Never commit `.env` files! They're already in `.gitignore`.

---

## 🎉 You're Almost Done!

Just deploy the frontend and your full-stack app will be live!

**Recommended**: Use Vercel for the fastest deployment experience.

Run: `vercel` from the `client` directory and you're done! 🚀
