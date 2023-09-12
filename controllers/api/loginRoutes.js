const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });
    
        if (!userData) {
        res.status(400).json({ message: 'Incorrect email or password, please try again' });
        return;
        }
    
        const validPassword = await userData.checkPassword(req.body.password);
    
        if (!validPassword) {
        res.status(400).json({ message: 'Incorrect email or password, please try again' });
        return;
        }
    
        req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
    
        res.json({ user: userData, message: 'You are now logged in!' });
        });
    
    } catch (err) {
        res.status(400).json(err);
    }
    });

router.get('/check', withAuth, async (req, res) => {
    try {
        res.json({ loggedIn: true });
    } catch (err) {
        res.json({ loggedIn: false });
    }
    });

router.post('/logout', withAuth, async (req, res) => {
    try {
        if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
        } else {
        res.status(404).end();
        }
    } catch (err) {
        res.status(400).json(err);
    }
    });

module.exports = router;