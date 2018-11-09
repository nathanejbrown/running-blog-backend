exports.up = function(knex, Promise) {
    return knex.schema.createTable('blog_posts', table => {
        table.increments();
        table.string('title');
        table.string('body');
        });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('blog_posts');
};
