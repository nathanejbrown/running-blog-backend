exports.up = function(knex, Promise) {
    return knex.schema.createTable('blog_posts', table => {
        table.increments();
        table.string('title').notNullable();
        table.string('body').notNullable();
        table.integer('authorID').references('userID').inTable('users').defaultTo(null);
        });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('blog_posts');
};
