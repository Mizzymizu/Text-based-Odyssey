const Character = require('./Character');
const User = require('./User');
const Specialization = require('./Specialization');
const Skills = require('./Skills');

User.associate = (models) => {
  User.hasMany(models.Character, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });
};

Character.associate = (models) => {
  Character.belongsTo(models.User, {
    foreignKey: 'user_id',
  });
};

// User hasMany Characters
// Character belongs to User
// Character hasMany Specializations
// Specializations hasMany Skills

module.exports = { Character, User, Specialization, Skills };