const environment = process.env.NODE_ENV;
const config = require('../knexfile.js')['development'];
module.exports = require('knex')(config);

// console.log(process.env);