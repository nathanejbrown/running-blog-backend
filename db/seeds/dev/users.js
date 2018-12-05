exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([
          {email: 'hank.moody@yahoo.com', password: '$2b$10$yxFZ0.Sv.EWeEQhqG/iQ5.dtyOWuPRDjMWDQVXaYg.frDM5yOllOq'},
          {email: 'dylan@earthlink.net', password: '$2b$10$COyCWsDJaBzwKBoh/O.FXOCGJ51.qkFT8r4yd6yr2D52721nOia86'},
          {email: 'stuff@thing.com', password: '$2b$10$4sENsiulcQyDxU674KzMZ.G3xQ48rjql4vO07gYL3Cc9jY.gS.ejW'}
        ]);
      });
  };