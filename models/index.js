const User = require('./User');
// const Specialization = require('./Specialization');
// const Skills = require('./Skills');
const Character = require('./Character');

User.hasMany(Character, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Character.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
} );

// Character belongs to User
// Character hasMany Specializations
// Specializations hasMany Skills

module.exports = { Character, User };