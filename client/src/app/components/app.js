angular.module('lyft-vs-uber')

.component('app', {
  controller: function(/* rideInfo */) {
    // rideInfo.get({start:{lat: 37.7836924, lng:-122.4089666}, end:{lat: 37.7838038, lng:-122.3989875}})
    // .then(data => {
    //   this.rideInfo = data;
    // });
    
    // //dummy data
    this.rideInfo = {
      uber: {
        price: 26,
        time: 20
      },
      lyft: {
        price: 31,
        time: 15
      }
    }
  },
  
  templateUrl: 'app/templates/app.html'
})