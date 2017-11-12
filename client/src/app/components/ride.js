angular.module('lyft-vs-uber')

.component('ride', {
  
  bindings: {
    provider: '@',
    rideInfo: '<',
    takeRide: '<'
  },
  
  templateUrl: 'app/templates/ride.html'
})