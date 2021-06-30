const PORT = 8000;

const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const bodyparser = require("body-parser");
// const helmet = require("helmet");
app.use(express.json());

 
app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
})

// const getUsers = (request, response) => {
//   pool.query('SELECT * FROM products', (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }

app.get('/api/products', async (req, res) => {
  try {
    // const allProducts = await pool.query(`SELECT * FROM products RETURNING *;`);
    // res.json(allProducts.rows);
    res.send('hi');

  } catch (err) {
    console.error(err.message);
  }


});
