const Character = require('./Character');
const User = require('./user');
const Specialization = require('./specialization');
const Skills = require('./skills');

// User hasMany Characters
// Character belongs to User
// Character hasMany Specializations
// Specializations hasMany Skills

module.exports = { Character, User, Specialization, Skills };