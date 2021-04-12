var express = require('express');
var router = express.Router();
const fetch = require('node-fetch')
var re = /href="(.*?)"/mgi
async function fun(res, s) {


    const response = await fetch(`https://www.google.com/search?q=${s.split(" ").join("+")}`);
    await response.text().then((text) => {
        let p = text.match(re)

        //console.log(p)

        //console.log(p)

        res.render('webscrap', { data: p })
    });
    //console.log(text)


}


/* GET users listing. */
router.get('/', function(req, res, next) {
    if (req.query.link === undefined) {
        res.render('webscrap', { data: [] })
    } else {
        fun(res, req.query.link)
    }
});

module.exports = router;