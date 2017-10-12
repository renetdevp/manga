const router = require('express').Router();
const morgan = require('morgan');
const bodyParser = require('body-parser');

//Set middleware
router.use(morgan('dev'));
router.use(bodyParser());
//router.use('/', require('../middleware/auth'));

//Get postModel
const postModel = require('../model/postModel');

router.post('/write', (req, res) => {
    const newPost = req.body;
    postModel.create(newPost, (err, post) => {
        console.log('post \'' + post.title + '\' created')
    });
    res.end();
});

router.get('/list', (req, res) => {
    postModel.find({}, {
        _id: false,
        __v: false
    }).exec((err, results) => {
        res.send(results);
    });
});

router.post('/:title/like', (req, res) => {
    res.end();
});
module.exports = router;
