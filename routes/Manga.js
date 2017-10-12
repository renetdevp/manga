const router = require('express').Router();
const morgan = require('morgan');

//Set logger
router.use(morgan('dev'));

const mangaModel = require('../model/mangaModel');

router.get('/list', (req, res) => {
	mangaModel.find({}).sort({title_ko: 1}).exec(function(err, mangas){
		res.json(mangas);
	});
});

module.exports = router;
