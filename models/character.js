const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Character extends Model {}

Character.init(
    {
        id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
        },
    },
    {
    sequelize,
    timeStamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'character'
    }
);

module.exports = Character;