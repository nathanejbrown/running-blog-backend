const jwt = require('jsonwebtoken');

exports.generateToken = function(emailAddress) {
    let myToken = jwt.sign({emailAddress: emailAddress}, process.env.PRIVATE_KEY_JWT);
    return myToken;
}