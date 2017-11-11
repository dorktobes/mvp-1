angular.module('lyft-vs-uber', [])
.config($sceDelegateProvider => {
  $sceDelegateProvider.resourceUrlWhitelist(['self']);
});