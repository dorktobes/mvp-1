angular.module('lyft-vs-uber')

.component('ride', {
  bindings: {
    provider: '@',
    rideInfo: '<'
  },
  
  templateUrl: 'app/templates/ride.html'
})