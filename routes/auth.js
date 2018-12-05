var express = require('express');
var router = express.Router();
var authQueries = require('../db/queries/authQueries');
var tokens = require('../shared/tokens');
// var hashing = require('../shared/hashing');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

router.post('/', function(req, res) {
    let password = req.body.password;
    let email = req.body.email.toLowerCase();
    authQueries.login((err, result) => {
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

router.post('/new', function (req, res) {
    let email = req.body.email;
    let password = req.body.password;
    authQueries.newUser((err, result) => {
        if (err) {
            console.log(err);
            res.status(400).end();
        } else {
            res.status(200).json({
                message: 'User Created'
            })
        }
    }, email, password)
})

module.exports = router;