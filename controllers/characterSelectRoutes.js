const router = require('express').Router();
const { Character } = require('../models');
const { withAuth } = require('../utils/auth');

// Route handler to render the character select page
router.get('/', withAuth, async (req, res) => {
  try {
    // Fetch the user's characters from the database
    const characters = await Character.findAll({
      where: {
        id: req.session.id,
          },
    });

    res.render('character-select', {
      characters: characters, // Pass the characters to the view
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve characters' });
  }
});

module.exports = router;
