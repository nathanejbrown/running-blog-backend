var express = require('express');
var router = express.Router();
var queries = require('../db/queries.js');

/* GET home page. */

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/posts', function(req, res) {
  queries.getBlogPost((err, result) => {
    if(err) {
      console.log(err);
    } else {
      res.status(200).send(result);
    }
  })
})

module.exports = router;
