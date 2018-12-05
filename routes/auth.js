var express = require('express');
var router = express.Router();
var queries = require('../db/queries.js');
var tokens = require('../shared/tokens');
var bcrypt = require('bcrypt');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

router.post('/', function(req, res) {
    let password = req.body.password;
    let email = req.body.email.toLowerCase();
    queries.login((err, result) => {
        if(err) {
            console.log(err);
            res.status(400).end();
        } else {
            console.log(result);
            let myToken = tokens.generateToken(req.body.email);
            res.status(200).json({myToken});
        }
    }, email, password)
})

module.exports = router;