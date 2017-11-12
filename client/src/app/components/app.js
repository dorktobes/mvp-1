angular.module('lyft-vs-uber')

.component('app', {
  controller: function(rideInfo) {
    // rideInfo.getInfo({start:{lat: 37.7836924, lng:-122.4089666}, end:{lat: 37.7838038, lng:-122.3989875}})
    // .then(data => {
    //   console.log(data);
    //   this.rideInfo = data;
    // });
    
    //dummy data
    this.rideInfo = {
      uber: {
        price: 26,
        time: 120
      },
      lyft: {
        price: 31,
        time: 9000
      }
    }
  },
  
  templateUrl: 'app/templates/app.html'
})