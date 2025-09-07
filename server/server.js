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

// --- NEW ADDITION 1: Trust Render's proxy ---
app.set('trust proxy', 1);
// --- END ADDITION ---

// Body Parser Middleware
app.use(express.json());

// CORS Middleware
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));

// Session Middleware
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true, // Use secure cookies in production
    httpOnly: true, // Prevent client-side JS from accessing the cookie
    // --- NEW ADDITION 2: Set SameSite for cross-domain cookies ---
    sameSite: 'none',
    // --- END ADDITION ---
    maxAge: 1000 * 60 * 60 * 24, // 1 day
  },
}));

// Mount routers
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));