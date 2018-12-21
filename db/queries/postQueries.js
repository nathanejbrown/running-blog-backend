const knex = require('../knex');

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

exports.newBlogPost = (callback, title, body) => {
    knex('blog_posts')
    .insert({
        title: title,
        body: body
    })
    .returning(['title', 'body'])
    .then(result => {
        callback(null, result)
    }).catch(err => {
        callback(err)
    })
}

exports.oneBlogPost = (callback, id) => {
    knex('blog_posts')
    .select('*')
    .where('id', id)
    .then(result => {
        callback(null, result)
    }).catch(err => {
        callback(err)
    })
}