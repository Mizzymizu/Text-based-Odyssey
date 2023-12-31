const sequelize = require('../config/connection');
const { User, Character, Specialization, Skills } = require('../models');

const userSeedData = require('./userSeedData.json');
const characterSeedData = require('./characterSeedData.json');
const specializationSeedData = require('./specializationSeedData.json')
const skillsSeedData = require('./skillsSeedData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userSeedData, {
        individualHooks: true,
        returning: true,
    });

    for (const character of characterSeedData) {
        await Character.create({
            ...character,
        })
    };

    for (const specialization of specializationSeedData) {
        await Specialization.create({
            ...specialization,
        });
    };

    for (const skills of skillsSeedData) {
        await Skills.create({
            ...skills,
        })
    };

    process.exit(0)
};

seedDatabase();