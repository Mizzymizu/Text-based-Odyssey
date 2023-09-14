const Character = require('./Character');
const User = require('./User');
const Specialization = require('./Specialization');
const Skills = require('./Skills')

// User hasMany Characters
// Character belongs to User
// Character hasMany Specializations
// Specializations hasMany Skills

module.exports = { Character, User, Specialization, Skills };