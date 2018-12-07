const express = require('express');
const router = express.Router();
const authQueries = require('../db/queries/authQueries');
const tokens = require('../shared/tokens');

router.post('/', function(req, res) {
    let password = req.body.password;
    let email = req.body.email.toLowerCase();
    authQueries.login((err, result) => {
        if(err) {
            res.status(400).end();
        } else {
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