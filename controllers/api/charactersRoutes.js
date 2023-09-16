const router = require('express').Router();
const { Character, User, Specialization, Skills } = require('../../models');
const { withAuth } = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const characterData = await Character.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [
                {
                    model: Specialization,
                    include: [
                        {
                            model: Skills
                        }
                    ]
                }
            ]
        });

        const characters = characterData.map((character) => character.get({ plain: true }));

        res.status(200).json(characters);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', withAuth, async (req, res) => {
    try {
        const characterData = await Character.findByPk(req.params.id, {
            include: [
                {
                    model: Specialization,
                    include: [
                        {
                            model: Skills
                        }
                    ]
                }
            ]
        });

        const character = characterData.get({ plain: true });

        res.status(200).json(character);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {
    try {
        const newCharacter = await Character.create({
            name: req.body.name,
            user_id: req.session.user_id
        });

        res.status(200).json(newCharacter);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', withAuth, async (req, res) => {
    try {
        const updatedCharacter = await Character.update(req.body, {
            where: {
                id: req.params.id
            }
        });

        res.status(200).json(updatedCharacter);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const deletedCharacter = await Character.destroy({
            where: {
                id: req.params.id
            }
        });

        res.status(200).json(deletedCharacter);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;