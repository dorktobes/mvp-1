angular.module('lyft-vs-uber')

.component('app', {
  controller: function(rideInfo) {

    this.search = (start, end) => {
      console.log('searching..');
      rideInfo.getInfo(start, end)
      .then(data => {
        console.log('response received!');
        this.rideInfo = data;
      });
    };
    
    this.search('hack reactor', 'dolores park');
    
    //dummy data
    // this.rideInfo = {
    //   uber: {
    //     price: 26,
    //     time: 120
    //   },
    //   lyft: {
    //     price: 31,
    //     time: 9000
    //   }
    // }
  },
  
  templateUrl: 'app/templates/app.html'
})