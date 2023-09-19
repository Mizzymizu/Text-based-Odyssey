const express = require('express');
const router = express.Router();
const { User } = require('../models'); // Adjust the import to match your models setup
// const { withAuth } = require('../utils/auth')

// Define route handlers for your homepage, login, and signup pages
router.get('/', async (req, res) => {
  try {
    res.render('homepage', { loggedIn: req.session.logged_in }); // Render the homepage.handlebars template
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/'); // If the user is already logged in, redirect the request to the homepage
    return;
  }
  res.render('login'); // Render the login.handlebars template
});

router.get('/signup', (req, res) => {
  res.render('signup'); // Render the signup.handlebars template
});


module.exports = router;
