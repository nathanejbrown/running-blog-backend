exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blog_posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('blog_posts').insert([
        {title: 'Testing', body: '1234'}
      ]);
    });
};
