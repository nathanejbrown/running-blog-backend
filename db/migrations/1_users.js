exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.increments('userID');
        table.string('first_name');
        table.string('last_name');
        table.string('email');
        table.string('password');
        table.string('profileImageUrl');
        });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};