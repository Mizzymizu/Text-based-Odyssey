const Character = require('./character');
const User = require('./user');

// User hasMany Characters
// Character belongs to User

module.exports = { Character, User };