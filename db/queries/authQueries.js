const knex = require('../knex');
const hashing = require('../../shared/hashing');

exports.login = (callback, email, password) => {
    knex('users')
    .select('*')
    .where('email', email)
    .then(result => {
        bcrypt.compare(password, result[0].password, function(err, res) {
            if (res) {
                callback(null, true);
            } else {
                callback('Incorrect Password');
            }
        });
    }).catch(err => {
        callback('User not found');
    })
}

exports.newUser = (callback, email, password) => {
    hashing.hashPassword(password)
    .then(result => {
        knex('users')
            .insert({
                email: email,
                password: result
            })
            .then(result => {
                callback(null, true);
            }).catch(err => {
                callback(err);
            })
    })
    .catch(err => {
        console.log(err)
    })
}