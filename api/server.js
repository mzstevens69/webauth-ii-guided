const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session({
  name: 'monkey',          // session id
  secret: 'keep it secret',
  cookie: {
    maxAge: 1000 * 60,
    secure: false,         // https only
    httpOnly: false,       // can we get at the cookie from JS?
  },
  resave: false,
  // if we don't explicitly do something with the session
  // don't respond with a Set-Cookie -> good GDPR (false)
  saveUninitialized: false
}));

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
  if (req.session.seenYouBefore) {
    res.json('welcome back')
  } else {
    req.session.seenYouBefore = true;
    res.json('nice to meed you! here is a cookie')
  }
});

module.exports = server;
