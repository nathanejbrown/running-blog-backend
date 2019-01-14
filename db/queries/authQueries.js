const knex = require('../knex');
const hashing = require('../../shared/hashing');

exports.login = (callback, email, password) => {
    knex('users')
    .select('*')
    .where('email', email)
    .then(result => {
        hashing.comparePassword(password, result[0].password)
        .then(resolve => {
            callback(null, result[0])
        }).catch(error => {
            callback(error)
        });
    }).catch(err => {
        callback('User not found');
    })
}

exports.newUser = (callback, email, password, firstName, lastName) => {
    hashing.hashPassword(password)
    .then(result => {
        knex('users')
            .insert({
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: result
            })
            .returning(['first_name', 'last_name', 'email', 'password', 'userID'])
            .then(result => {
                callback(null, result[0]);
            }).catch(err => {
                callback(err);
            })
    })
    .catch(err => {
        console.log(err)
    })
}