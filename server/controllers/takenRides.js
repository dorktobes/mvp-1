const Promise = require('bluebird');
const url = require('url');
const models = require('../models');

module.exports = {
  get: (req, res) => {
    let query = url.parse(req.url, true).query;
    models.takenRides.get(query)
    .then(takenRides => {
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });
      res.end(JSON.stringify(takenRides));
    });
  },
  
  post: (req, res) => {
    models.takenRides.post(req.body)
    .then(() => {
      res.writeHead(201);
      res.end();
    })
  }
};