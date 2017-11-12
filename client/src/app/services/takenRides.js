angular.module('lyft-vs-uber')

.service('takenRides', function($http) {
  this.get = () => {
    return $http({
      method: 'GET',
      url: '/takenRides',
      headers: {
        'Data-Type': 'application/JSON'
      },
    }).then(res => res.data); 
  };
  
  this.post = params => {
    return $http({
      method: 'POST',
      url: '/takenrides',
      headers: {
        'Content-Type': 'application/JSON'
      },
      data: params
    });
  }
});