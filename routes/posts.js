const express = require('express');
const router = express.Router();
const postQueries = require('../db/queries/postQueries.js');

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

router.post('/new', function (req, res) {
    postQueries.newBlogPost((err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).send(result);
        }
    }, req.body.title, req.body.body)
})

module.exports = router;

