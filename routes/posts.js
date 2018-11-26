var express = require('express');
var router = express.Router();
var queries = require('../db/queries.js');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

router.get('/newest-post', function(req, res) {
    queries.getBlogPost((err, result) => {
        if(err) {
        console.log(err);
        } else {
        res.status(200).send(result);
        }
    }, false)
})

router.get('/all-posts', function (req, res) {
    queries.getBlogPost((err, result) => {
        if(err) {
        console.log(err);
        } else {
        console.log(result)
        res.status(200).send(result);
        }
    }, true)
})

module.exports = router;

