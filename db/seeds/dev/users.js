exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([
          {email: 'hank.moody@yahoo.com',
           password: '$2b$10$yxFZ0.Sv.EWeEQhqG/iQ5.dtyOWuPRDjMWDQVXaYg.frDM5yOllOq',
           first_name: 'Hank',
           last_name: 'Moody',
           profileImageUrl: 'https://res.cloudinary.com/drwjbjpwv/image/upload/v1547667847/zlnvy6zy2uriic3aqkzx.gif'},
          {email: 'dylan@earthlink.net',
           password: '$2b$10$COyCWsDJaBzwKBoh/O.FXOCGJ51.qkFT8r4yd6yr2D52721nOia86',
           first_name: 'Bob',
           last_name: 'Dylan',
           profileImageUrl: 'https://res.cloudinary.com/drwjbjpwv/image/upload/v1547508586/re8sfa9cfjpcyebymuw5.jpg'},
          {email: 'stuff@thing.com',
           password: '$2b$10$4sENsiulcQyDxU674KzMZ.G3xQ48rjql4vO07gYL3Cc9jY.gS.ejW',
           first_name: 'Hingle',
           last_name: 'McCringleberry',
           profileImageUrl: 'https://res.cloudinary.com/drwjbjpwv/image/upload/v1507661979/dm1s9u1tudebngjfvjrg.jpg'}
        ]);
      });
  };