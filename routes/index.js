const express = require('express');
const userRouter = require('./users');

const Router = express.Router();

Router.use('/user', userRouter);

module.exports = Router;
