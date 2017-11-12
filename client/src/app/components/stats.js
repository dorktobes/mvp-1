angular.module('lyft-vs-uber')

.component('stats', {
  bindings: {
    stats: '<'
  },
  
  templateUrl: 'app/templates/stats.html'
})