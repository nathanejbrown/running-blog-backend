exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([
          {email: 'hank.moody@yahoo.com', password: 'Karen1234'},
          {email: 'dylan@earthlink.net', password: 'Timesachangin21'},
          {email: 'stuff@thing.com', password: '1234567890'}
        ]);
      });
  };