const jwt = require('jsonwebtoken');

exports.generateToken = function(emailAddress, firstName, lastName, userID) {
    let myToken = jwt.sign({
        emailAddress: emailAddress,
        firstName: firstName,
        lastName: lastName,
        userID: userID
    }, process.env.PRIVATE_KEY_JWT);
    return myToken;
}