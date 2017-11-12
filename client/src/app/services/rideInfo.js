angular.module('lyft-vs-uber')

.service('rideInfo', function($http) {
  this.getInfo = (start, end) => {
    return $http({
      method: 'GET',
      url: '/rideInfo',
      headers: {
        'Data-Type': 'application/JSON'
      },
      params: {
        start: start,
        end: end
      }
    }).then(res => res.data); 
  };
});