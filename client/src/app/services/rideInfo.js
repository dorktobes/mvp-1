angular.module('lyft-vs-uber')

.service('rideInfo', function($http) {
  this.getInfo = params => {
    return $http({
      method: 'GET',
      url: '/rideInfo',
      headers: {
        'Data-Type': 'application/JSON'
      },
      params: params
    }).then(res => res.data); 
  };
});