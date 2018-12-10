const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.status(200).json({
        message: 'You made it to the profile page'
    })
})

module.exports = router;