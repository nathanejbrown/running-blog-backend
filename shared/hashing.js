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