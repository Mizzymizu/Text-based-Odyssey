const router = require('express').Router();
const { User, Character } = require('../models'); // Adjust the import to match your models setup
const { withAuth } = require('../utils/auth')

// Define route handlers for your homepage, login, and signup pages
router.get('/', async (req, res) => {
  try {
    res.render('homepage', { loggedIn: req.session.logged_in }); // Render the homepage.handlebars template
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// GET ALL CHARACTERS
router.get('/characters', withAuth, async (req, res) => {
  try {
    const characterData = await Character.findAll({
      where: {
        user_id: req.session.user_id,
      }
    });

    const characters = characterData.get({ plain: true })
    res.render('character-select', {
      ...characters, 
      logged_in: req.session.logged_in,
    })
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/create' , async (req, res) => {
  res.render('character-create');
})

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
