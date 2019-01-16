const express = require('express');
const router = express.Router();
const expressJwt = require('express-jwt');
const profileQueries = require('../db/queries/profileQueries');

router.get('/', expressJwt({secret: process.env.PRIVATE_KEY_JWT}), function (req, res) {
    let fullName = `${req.user.firstName} ${req.user.lastName}`
    let profileImageUrl = req.user.profileImageUrl
    res.status(200).json({
        message: 'You made it to the profile page, ',
        name: fullName,
        profileImageUrl: profileImageUrl
    })
})

router.post('/new-profile-image', expressJwt({secret: process.env.PRIVATE_KEY_JWT}), function (req, res) {
    let profileImageUrl = req.body.profileImageUrl;
    let id = req.user.userID;
    profileQueries.updateProfileImageUrl((err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json({
                profileImageUrl: profileImageUrl
            })
        }
    }, id, profileImageUrl)
})

module.exports = router;