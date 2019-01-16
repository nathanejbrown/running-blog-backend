const knex = require('../knex');

exports.updateProfileImageUrl = (callback, id, profileImageUrl) => {
    knex('users')
    .where('userID', id)
    .update({
        profileImageUrl: profileImageUrl
    })
    .then(result => {
        callback(null, result)
    }).catch(err => {
        callback(err)
    })
}