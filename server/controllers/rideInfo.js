const Promise = require('bluebird');
const url = require('url');
const models = require('../models');

module.exports.get = (req, res) => {
  let query = url.parse(req.url, true).query;
  let startAddress = query.start;
  let endAddress = query.end; 
  
  Promise.all([
    models.coordinates.get(startAddress),
    models.coordinates.get(endAddress)
  ]).then(coords => {
    return Promise.all([
      models.uberRides.get(coords[0], coords[1]),
      models.lyftRides.get(coords[0], coords[1])
    ]);
  })
  .then(rideInfos => {
    let ridesInfo = {
      uber: rideInfos[0],
      lyft: rideInfos[1]
    };
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    console.log(rideInfos);
    res.end(JSON.stringify(ridesInfo));
  })
  .catch(error => {
    res.writeHead(500);
    console.log('There was an error:', error);
    res.end('There was an error:', error);
  })
};