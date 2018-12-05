var express = require('express');
var router = express.Router();
var postQueries = require('../db/queries/postQueries.js');

router.get('/newest-post', function(req, res) {
    postQueries.getBlogPost((err, result) => {
        if(err) {
        console.log(err);
        } else {
        res.status(200).send(result);
        }
    }, false)
})

router.get('/all-posts', function (req, res) {
    postQueries.getBlogPost((err, result) => {
        if(err) {
        console.log(err);
        } else {
        res.status(200).send(result);
        }
    }, true)
})

module.exports = router;

