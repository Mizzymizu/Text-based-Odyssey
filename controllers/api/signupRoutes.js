const router = require('express').Router();
const { User } = require('../../models');
const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");
const { create } = require('../../models/User');

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            console.log("user data", userData)
            res.status(200).json(userData);
        });
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
});

module.exports = router;