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