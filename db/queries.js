const knex = require('./knex');

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
        if (result[0].password === password) {
            callback(null, result[0].email)
        } else {
            callback('Incorrect Password')
        }
    })
}