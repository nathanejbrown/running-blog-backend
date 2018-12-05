const knex = require('./knex');
const bcrypt = require('bcrypt');

exports.getBlogPost = (callback, allPosts) => {
    knex('blog_posts')
    .select('*')
    .then(result => {
        if (allPosts) {
            callback(null, result)
        } else {
            callback(null, result[result.length - 1]);
        }
    }).catch(err => {
        callback(err);
    })
}

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