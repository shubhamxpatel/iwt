const { request } = require('express');
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {

    console.log(req.query.search)
    let x = (req.query.search === undefined) ? "" : req.query.search
    console.log(x, typeof(x))
    res.render('index', { title: 'Express', psearch: x });
});

module.exports = router;