const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const session = require('express-session');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Body Parser Middleware
app.use(express.json());

// CORS Middleware
// IMPORTANT: For production, you should restrict the origin
app.use(cors({
  origin: process.env.CLIENT_URL, // Use an environment variable for the client's URL
  credentials: true, // Allow cookies to be sent
}));

// Session Middleware
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
    httpOnly: true, // Prevent client-side JS from accessing the cookie
    maxAge: 1000 * 60 * 60 * 24, // 1 day
  },
}));

// Mount routers
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));