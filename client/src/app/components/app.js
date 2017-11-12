angular.module('lyft-vs-uber')

.component('app', {
  controller: function(rideInfo, takenRides) {

    this.search = (start, end) => {
      console.log('searching..');
      rideInfo.getInfo(start, end)
      .then(data => {
        console.log('response received!');
        this.rideInfo = data;
      });
    };
    
    this.takeRide = provider => {
      takenRides.post({
        provider: provider,
        uberPrice: this.rideInfo.uber.price,
        uberTime: this.rideInfo.uber.time,
        lyftPrice: this.rideInfo.lyft.price,
        lyftTime: this.rideInfo.lyft.time
      })
      .then(() => {
        this.getStats();
      });
    }
    
    this.getStats = () => {
      takenRides.get()
      .then(data => {
        this.stats.ubersTaken = data.filter(takenRide => takenRide.provider === 'Uber').length;
        this.stats.lyftsTaken = data.length - this.stats.ubersTaken;
      });
    }
    
    this.stats = {
      ubersTaken: 0,
      lyftsTaken: 0
    };
    
    this.search('hack reactor', 'dolores park');
    this.getStats();
    
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