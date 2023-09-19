const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
// const characterSelectRoutes = require('./characterSelectRoutes');
// const characterCreateRoutes = require('./characterCreateRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
// router.use('/character-select', characterSelectRoutes);
// router.use('/character-create', characterCreateRoutes);

module.exports = router;
