const knex = require('./knex');

exports.getBlogPost = (callback) => {
    knex('blog_posts')
    .select('*')
    .then(result => {
        callback(null, result);
    }).catch(err => {
        callback(err);
    })
}