const router = require('express').Router();
const loginRoutes = require('./loginRoutes');
const charactersRoutes = require('./charactersRoutes');
const signupRoutes = require('./signupRoutes');

router.use('/login', loginRoutes);
//router.use('/characters', charactersRoutes);
router.use('/signup', signupRoutes);

module.exports = router;
