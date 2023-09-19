const router = express('express').Router();
const { Character } = require('../models');
const { withAuth } = require('../utils/auth');

// Route handler to render the character creation page
router.get('/', withAuth, (req, res) => {
  res.render('character-create');
});

// Route handler to process character creation form submission
router.post('/', withAuth, async (req, res) => {
  try {
    // Extract character data from the form submission
    const { characterName } = req.body;

    // Create the character in your database
    const newCharacter = await Character.create({
      name: characterName,
        user_id: req.session.user_id,
      // Add other attributes here as needed
    });

    console.log(newCharacter);

    // Redirect the user to the character selection page or wherever is appropriate
    res.redirect('/character-select');
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create character' });
  }
});

module.exports = router;
