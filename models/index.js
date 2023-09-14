const Character = require('./character');
const User = require('./user');

// User hasMany Characters
// Character belongs to User
// Character hasMany Specializations
// Specializations hasMany Skills

module.exports = { Character, User, Specialization, Skills };