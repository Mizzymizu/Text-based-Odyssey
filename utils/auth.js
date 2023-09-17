// User data stored in this variable
let userData = null;

// Function to set user data when the user logs in
function setUserData(data) {
  userData = data;
}

// Function to get the current user's data
function getUserData(req) {
  return req.session.user;
}

// Function to clear user data when the user logs out
function logout() {
  userData = null;
}

// Middleware to check if the user is logged in
const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = { setUserData, getUserData, logout, withAuth };