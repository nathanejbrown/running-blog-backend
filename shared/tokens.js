const jwt = require('jsonwebtoken');

exports.generateToken = function(emailAddress, firstName, lastName, userID, profileImageUrl) {
    let myToken = jwt.sign({
        emailAddress: emailAddress,
        firstName: firstName,
        lastName: lastName,
        userID: userID,
        profileImageUrl: profileImageUrl
    }, process.env.PRIVATE_KEY_JWT);
    return myToken;
}