const Promise = require('bluebird');
const googleMapsClient = Promise.promisifyAll(
  require('@google/maps').createClient({
    key: process.env.GOOGLE_API_KEY
  })
);

module.exports = {
  get: (address) => {
    return googleMapsClient.geocodeAsync({
      address: address
    }).then(res => res.json.results[0].geometry.location);
  }
};