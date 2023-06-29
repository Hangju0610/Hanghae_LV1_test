const express = require('express');
const dotenv = require('dotenv');
const connect = require('./schemas');
const indexRouter = require('./routes/index');

dotenv.config();

const app = express();

connect();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);

app.listen(process.env.PORT, () => {
    console.log(`App running!`);
});
