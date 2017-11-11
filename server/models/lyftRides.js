Promise = require('bluebird');
request = Promise.promisifyAll(require('request'));

let accessToken = request.postAsync({
  url: `https://${process.env.LYFT_CLIENT_ID}:${process.env.LYFT_CLIENT_SECRET}@api.lyft.com/oauth/token`,
  headers: {
    'Content-Type': 'application/json'
  },
  form : {
    grant_type: 'client_credentials',
    scope: 'public'
  },
})
.then(response => {
  console.log(response.body);
})
.catch(error => {
  console.log('There was an error:', error);
})

module.exports = {
  get: () => {
    
  }
}
