//Import modules
const router = require('express').Router();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const util = require('util');

//Set middleware
router.use(morgan('dev'));
router.use(bodyParser());

const userModel = require('../model/userModel');

router.get('/list', (req, res) => {
    userModel.find({}, {
        _id: false,
		__v: false
    }).exec((err, result) => {
        console.log(result);
    });
	res.end();
});

router.post('/signin', (req, res) => {
    const user = req.body;

    userModel.create(user, (err, newUser) => {
        console.log('user \'' + newUser.nickname + '\' created');
    });
    res.end();
});

module.exports = router;
