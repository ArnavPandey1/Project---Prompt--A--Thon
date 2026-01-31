# TimeMap - AI-Powered Task Manager

A full-stack task management application with AI-powered prioritization using Google's Gemini API.

## 🎯 Features

- ✅ **User Authentication** - Secure JWT-based auth with password hashing
- ✅ **Task Management** - Create, read, update, and delete tasks
- ✅ **AI Prioritization** - Intelligent task ordering using Gemini API
- ✅ **Real-time Updates** - Seamless frontend-backend integration
- ✅ **Responsive Design** - Beautiful UI with dark/light mode support
- ✅ **Task Reminders** - Due date tracking and notifications

## 🛠️ Tech Stack

### Frontend
- **React** + **TypeScript** + **Vite**
- **TailwindCSS** - Styling
- **Framer Motion** - Animations
- **shadcn/ui** - UI Components
- **React Router** - Navigation

### Backend
- **Node.js** + **Express.js**
- **MongoDB** + **Mongoose**
- **JWT** - Authentication
- **Gemini API** - AI Prioritization
- **bcryptjs** - Password Hashing

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (running locally or cloud instance)
- Gemini API Key ([Get one here](https://makersuite.google.com/app/apikey))

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd Project---Prompt--A--Thon
```

### 2. Backend Setup

```bash
cd server
npm install
```

Create `.env` file in `server` directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/timemap
JWT_SECRET=your_super_secret_jwt_key_change_this
GEMINI_API_KEY=your_gemini_api_key_here
NODE_ENV=development
```

Start MongoDB:
```bash
# Windows
net start MongoDB

# Mac/Linux
mongod
```

Run the server:
```bash
npm run dev
```

Server will start on `http://localhost:5000`

### 3. Frontend Setup

```bash
cd client
npm install
```

The `.env` file is already configured:
```env
VITE_API_URL=http://localhost:5000
```

Run the frontend:
```bash
npm run dev
```

Frontend will start on `http://localhost:5174`

## 📖 Usage

### 1. Create an Account
- Navigate to `http://localhost:5174`
- Click "Get Started" or "Sign Up"
- Enter your email, password, and name
- You'll be automatically logged in

### 2. Manage Tasks
- Go to the Tasks page from the dashboard
- Add new tasks with title, description, priority, and due date
- Mark tasks as complete
- Delete tasks you no longer need

### 3. AI Prioritization
- Click the "AI Prioritize" button (to be added to UI)
- The system will analyze your tasks and reorder them
- Get AI-generated reasoning for the prioritization

### 4. View Dashboard
- See overview of your tasks
- Track completion progress
- Access planner and other features

## 📁 Project Structure

```
Project---Prompt--A--Thon/
├── client/                    # Frontend React app
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   ├── context/           # React context (Auth)
│   │   ├── layouts/           # Page layouts
│   │   ├── pages/             # Route pages
│   │   ├── services/          # API service layer
│   │   └── lib/               # Utilities
│   ├── .env                   # Frontend environment variables
│   └── package.json
│
└── server/                    # Backend Node.js app
    ├── src/
    │   ├── config/            # Database config
    │   ├── controllers/       # Route handlers
    │   ├── middleware/        # Auth middleware
    │   ├── models/            # MongoDB schemas
    │   ├── routes/            # API routes
    │   └── server.js          # Entry point
    ├── .env                   # Backend environment variables
    └── package.json
```

## 🔌 API Endpoints

### Authentication
- `POST /auth/signup` - Create new user
- `POST /auth/login` - Login user

### Tasks (Authenticated)
- `GET /tasks` - Get all user tasks
- `POST /tasks` - Create new task
- `PUT /tasks/:id` - Update task
- `DELETE /tasks/:id` - Delete task

### AI (Authenticated)
- `POST /ai/prioritize` - Get AI task prioritization

## 🎨 Features in Detail

### Authentication
- Secure password hashing with bcrypt
- JWT tokens with 7-day expiration
- Protected routes on both frontend and backend
- Automatic token refresh on page reload

### Task Management
- Full CRUD operations
- Priority levels: Low, Medium, High
- Estimated time tracking
- Due date management
- Status tracking (Todo/Done)

### AI Prioritization
- Analyzes task priority, due dates, and estimated time
- Provides reasoning for task order
- Fallback to manual sorting if AI fails
- Lightweight and fast responses

## 🐛 Troubleshooting

### Backend won't start
- Ensure MongoDB is running
- Check `.env` file configuration
- Verify port 5000 is not in use

### Frontend can't connect to backend
- Ensure backend is running on port 5000
- Check `VITE_API_URL` in client `.env`
- Clear browser cache and reload

### AI Prioritization fails
- Verify Gemini API key is correct
- Check API quota/limits
- System will fallback to manual sorting

### Authentication issues
- Clear localStorage in browser
- Check JWT_SECRET matches in backend
- Verify token is being sent in headers

## 📝 Development

### Run in Development Mode

Terminal 1 (Backend):
```bash
cd server
npm run dev
```

Terminal 2 (Frontend):
```bash
cd client
npm run dev
```

### Build for Production

Backend:
```bash
cd server
npm start
```

Frontend:
```bash
cd client
npm run build
npm run preview
```

## 🔐 Security Notes

- Change `JWT_SECRET` in production
- Use HTTPS in production
- Keep API keys secure
- Never commit `.env` files
- Use environment-specific configurations

## 📄 License

MIT

## 👥 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 🙏 Acknowledgments

- Google Gemini API for AI capabilities
- shadcn/ui for beautiful components
- MongoDB for reliable data storage
