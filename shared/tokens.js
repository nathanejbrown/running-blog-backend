const jwt = require('jsonwebtoken');

exports.generateToken = function(emailAddress, firstName, lastName) {
    let myToken = jwt.sign({
        emailAddress: emailAddress,
        firstName: firstName,
        lastName: lastName
    }, process.env.PRIVATE_KEY_JWT);
    return myToken;
}