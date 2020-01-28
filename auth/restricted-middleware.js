const bcrypt = require('bcryptjs');

const Users = require('../users/users-model.js');

module.exports = (req, res, next) => {
  if (req.session.loggedInUser) {
    next();
  } else {
    res.status(400).json({ message: 'No credentials provided' });
  }
};
