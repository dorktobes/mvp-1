const models = require('../models');

module.exports.get = (req, res) => {
  Promise.all([
    models.uberRides.get(),
    models.lyftRides.get()
  ])
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
};