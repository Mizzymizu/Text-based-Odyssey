const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Specialization extends Model {}

Specialization.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        skills: {
            type: DataTypes.STRING,
            //references: {
                model: 'skills',
                key: 'id',
            },
        },
    //},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'specialization',
    }
);

module.exports = Specialization;