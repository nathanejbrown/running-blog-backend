const jwt = require('jsonwebtoken');

exports.generateToken = function(emailAddress) {
    var myToken = jwt.sign({emailAddress: emailAddress}, process.env.PRIVATE_KEY_JWT);
    return myToken;
}