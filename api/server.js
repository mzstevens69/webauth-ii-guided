const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
  if (req.headers.cookie) {
    res.json('welcome back!!')
  } else {
    res.cookie('foo', 'bar');
    res.json('nice to meet you! Here is a cookie')
  }
});

module.exports = server;
