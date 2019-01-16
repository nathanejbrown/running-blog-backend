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
            console.log(result)
            let myToken = tokens.generateToken(result.email, result.first_name, result.last_name, result.userID, result.profileImageUrl);
            res.status(200).json({
                myToken
            });
        }
    }, email, password)
})

router.post('/new', function (req, res) {
    let email = req.body.email;
    let password = req.body.password;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    authQueries.newUser((err, result) => {
        if (err) {
            console.log(err);
            res.status(400).end();
        } else {
            let myToken = tokens.generateToken(result.email, result.first_name, result.last_name, result.userID, result.profileImageUrl);
            res.status(200).json({myToken});
        }
    }, email, password, firstName, lastName)
})

module.exports = router;