//const bcrypt = require('bcryptjs');

//const Users = require('../users/users-model.js');
//rule always check the .req to the left before checking the .userId or loggedIn
module.exports = (req, res, next) => {
  // final using middleware to restrict access to resources.
  console.log(req.session)
  
  if (req.session && req.session.username) { //req.session.loggedIn or req.session.userId
  next()
  } else {
    res.status(401).json({ message: "you shall not pass!" })
  }
  
// setting up session cookies
  // if (req.session && req.session.user) {
  //   next()
  // } else {
  //   res.status(400).json({ message: 'You shall not pass!' });
  // }
//where we started with the middleware.....
  // const { username, password } = req.headers;

  // if (username && password) {
  //   Users.findBy({ username })
  //     .first()
  //     .then(user => {
  //       if (user && bcrypt.compareSync(password, user.password)) {
  //         next();
  //       } else {
  //         res.status(401).json({ message: 'Invalid Credentials' });
  //       }
  //     })
  //     .catch(error => {
  //       res.status(500).json({ message: 'Ran into an unexpected error' });
  //     });
  // } else {
  //   res.status(400).json({ message: 'No credentials provided' });
  // }
};
