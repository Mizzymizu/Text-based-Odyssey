const router = require('express').Router();
const loginRoutes = require('./loginRoutes');
const charactersRoutes = require('./charactersRoutes');

router.use('/login', loginRoutes);
router.use('/characters', charactersRoutes);

module.exports = router;
