const Pool = require('pg').Pool

const pool = new Pool({
  user: 'moseskim',
  password: 'groot',
  host: 'localhost',
  port: 8000,
  database: 'kims_optical'
});


module.exports = pool;