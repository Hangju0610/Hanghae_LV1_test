const mongoose = require('mongoose');

const connect = async () => {
    mongoose
        .connect(process.env.MONGO_URI, {
            dbName: 'users',
        })
        .then(() => console.log('MongoDB connected'))
        .catch((err) => console.log(err));
};

mongoose.connection.on('error', (err) => {
    console.error('몽고디비 연결 에러');
});

module.exports = connect;
