const express = require('express');
const router = express.Router();
const postQueries = require('../db/queries/postQueries.js');
const expressJwt = require('express-jwt');

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

router.get('/one-post/:id', function (req, res) {
    postQueries.oneBlogPost((err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).send(result)
        }
    }, req.params.id)
})

router.post('/new', function (req, res) {
    postQueries.newBlogPost((err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).send(result);
        }
    }, req.body.title, req.body.body, req.user.userID)
})

router.get('/all-by-author', function (req, res) {
    postQueries.allPostsByAuthor((err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).send(result);
        }
    }, req.user.userID)
})

module.exports = router;

