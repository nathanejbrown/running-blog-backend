var express = require('express');
var router = express.Router();
var queries = require('../db/queries.js');
var tokens = require('../shared/tokens');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

router.post('/', function(req, res) {
    queries.login((err, result) => {
        if(err) {
            res.status(400).end();
        } else {
            let myToken = tokens.generateToken(req.body.email);
            res.status(200).json({myToken});
        }
    }, req.body.email, req.body.password)
})

module.exports = router;