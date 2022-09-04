const Pool = require("pg").Pool;

const pool = new Pool({
  // See the .env file for these valuesdb.js
});

module.exports = pool;
