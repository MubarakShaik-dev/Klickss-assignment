const User = require('../models/User');

// @desc    Register a new user
// @route   POST /api/auth/register
exports.register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({
      email,
      password,
    });

    if (user) {
      res.status(201).json({
        message: 'User registered successfully! Please log in.',
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    res.status(500).json({ message: `Server Error: ${error.message}` });
  }
};

// @desc    Auth user & get token (login)
// @route   POST /api/auth/login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).select('+password');

    if (user && (await user.matchPassword(password))) {
      // Create session
      req.session.userId = user._id;
      req.session.userEmail = user.email;

      res.json({
        _id: user._id,
        email: user.email,
        message: 'Login successful',
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: `Server Error: ${error.message}` });
  }
};

// @desc    Logout user / clear session
// @route   POST /api/auth/logout
exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: 'Could not log out, please try again.' });
    }
    res.clearCookie('connect.sid'); // The default session cookie name
    res.status(200).json({ message: 'Logout successful' });
  });
};

// @desc    Get user profile (check if logged in)
// @route   GET /api/auth/status
exports.getStatus = (req, res) => {
    if (req.session.userId) {
        res.status(200).json({
            isLoggedIn: true,
            user: {
                id: req.session.userId,
                email: req.session.userEmail,
            },
        });
    } else {
        res.status(200).json({ isLoggedIn: false });
    }
};