const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get('/api/products', (req, res) => {
    db.query(
      `SELECT * FROM products;`
    ).then(data => {
      res.json(data);
    }).catch(error => {
      console.log(error);
    })
  })
}