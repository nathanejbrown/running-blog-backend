const bcrypt = require('bcrypt');

exports.hashPassword = (password) => {
    return new Promise(function(resolve, reject) {
        bcrypt.hash(password, 10, function(err, hash) {
            if (err) {
                reject(Error(err));
            } else {
                resolve(hash)
            }
        });
    });
}

exports.comparePassword = (password, hashedPassword) => {
    return new Promise(function(resolve, reject) {
        bcrypt.compare(password, hashedPassword, function(err, res) {
            if (err || !res) {
                reject(Error(err));
            } else {
                resolve(true)
            }
        });
    });
}