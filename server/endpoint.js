const { response, request } = require('express');
const express = require('express');
const Router = express.Router();
const client = require('./database')


Router.get('/endpoint', (request, response) => {
   const data = client.query('SELECT * FROM questions;', (err, results) => {
        if (err) console.log(err);
        response.send(results.rows);
    })
});

module.exports = Router;