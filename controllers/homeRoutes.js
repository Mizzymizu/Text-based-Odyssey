const express = require('express');
const router = express.Router();
const { User } = require('../models'); // Adjust the import to match your models setup

// Define route handlers for your homepage, login, and signup pages
router.get('/', async (req, res) => {
  try {
    // You can perform any necessary data retrieval or processing here
    res.render('homepage', { title: 'Home' }); // Render the homepage.handlebars template
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/login', (req, res) => {
  res.render('login', { title: 'Login' }); // Render the login.handlebars template
});

router.get('/signup', (req, res) => {
  res.render('signup', { title: 'Sign Up' }); // Render the signup.handlebars template
});

// POST route for handling login form submission
router.post('/login', async (req, res) => {
  try {
    // Handle login logic here, e.g., check user credentials
    const { email, password } = req.body;

    // Example: Check if the user exists in the database and password is correct
    const user = await User.findOne({ where: { email } });
    if (!user || !user.validPassword(password)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Set up user session or JWT token for authentication

    // Redirect to a protected dashboard or profile page
    return res.redirect('/dashboard');
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST route for handling signup form submission
router.post('/signup', async (req, res) => {
  try {
    // Handle user registration logic here, e.g., create a new user
    const { name, email, password } = req.body;

    // Example: Create a new user in the database
    await User.create({ name, email, password });

    // Redirect to a login page or a dashboard after successful signup
    return res.redirect('/login');
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
