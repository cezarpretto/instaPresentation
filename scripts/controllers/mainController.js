'use strict';

angular.module('instaPresentation')
  .controller('MainCtrl', ['$location', function ($location) {
    var self = this;
    this.hashtag = 'ionicgoias';

    this.go = function(){
      $location.path('slide/' + self.hashtag);
    };
  }]);
