const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');

const secret = require('./config/secret');

//Connect db
mongoose.connect('mongodb://localhost/manga');
const db = mongoose.connection;

//Set logger
app.use(morgan('dev'));

//Set secret_key
app.set('secret_key', secret.secret_key);

//routes
app.use('/manga', require('./routes/Manga'));
app.use('/post', require('./routes/Post'));
app.use('/user', require('./routes/User'));

//get /
app.get('/', function(req, res) {
    res.send('hi');
});

db.once('open', function() {
    console.log('connected to db');
    app.listen(secret.port, function() {
        console.log('server on');
    });
});

db.on('error', console.error);
