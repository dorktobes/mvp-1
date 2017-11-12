Promise = require('bluebird');
request = Promise.promisifyAll(require('request'));

let accessTokenPromise = 
// //stub so I'm not spamming ou=auth for access tokens
// request.postAsync({
//   url: `https://${process.env.LYFT_CLIENT_ID}:${process.env.LYFT_CLIENT_SECRET}@api.lyft.com/oauth/token`,
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   form : {
//     grant_type: 'client_credentials',
//     scope: 'public'
//   },
// })
// .then(res => {
//   return JSON.parse(res.body).access_token; 
// })
// .catch(error => {
//   console.log('There was an error:', error);
// })
//stub:
new Promise((resolve, reject) => {
  resolve(process.env.LYFT_TOKEN);
})

module.exports = {
  get: (start={lat: 37.7838038, lng:-122.3989875}, end={lat: 37.7836924, lng:-122.4089666}) => {
    return accessTokenPromise
    .then(token => {
      return request.getAsync({
        url: 'https://api.lyft.com/v1/cost',
        qs: {
          start_lat: start.lat,
          start_lng: start.lng,
          end_lat: end.lat,
          end_lng: end.lng,
        },
        headers: {
          'Authorization': `bearer ${token}`
        }
      })
    })
    .then(res => {
      let estimates = JSON.parse(res.body).cost_estimates;
      let lyft = estimates.find(estimate => estimate.ride_type === 'lyft');
      return {
        price: lyft.estimated_cost_cents_max / 100,
        time: lyft.estimated_duration_seconds
      };
    });
  }
}
