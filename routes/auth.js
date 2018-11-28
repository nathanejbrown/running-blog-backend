var express = require('express');
var router = express.Router();
var queries = require('../db/queries.js');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// router.use(errorHandler);

router.post('/', function(req, res) {
    queries.login((err, result) => {
        if(err) {
            res.status(400).end();
        } else {
            let responseObject = {
                email: result,
                success: true
            }
            res.status(200).send(responseObject);
        }
    }, req.body.email, req.body.password)
})

module.exports = router;