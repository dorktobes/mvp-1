const Promise = require('bluebird');
const request = Promise.promisifyAll(require('request'));

module.exports = {
  get: (start, end) => {
    return request.getAsync({
      url: 'https://api.uber.com/v1.2/estimates/price',
      qs: {
          start_latitude: start.lat,
          start_longitude: start.lng,
          end_latitude: end.lat,
          end_longitude: end.lng,
        },
        headers: {
          'Authorization': `Token ${process.env.UBER_TOKEN}`,
          'Content-Type': 'application/json'
        }
    })
    .then(res => {
      let estimates = JSON.parse(res.body).prices;
      let uberX = estimates.find(estimate => estimate.localized_display_name === 'uberX'); //uberX
      return {
        price: uberX.high_estimate,
        time: uberX.duration
      };
    });
  }
};