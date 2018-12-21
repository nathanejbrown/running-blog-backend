const express = require('express');
const router = express.Router();
const expressJwt = require('express-jwt');

router.get('/', expressJwt({secret: process.env.PRIVATE_KEY_JWT}), function (req, res) {
    res.status(200).json({
        message: 'You made it to the profile page, ',
        name: req.user.firstName
    })
})

module.exports = router;