const express = require('express');
const userRouter = require('./users');

const Router = express.Router();

Router.use('/users', userRouter);

module.exports = Router;
