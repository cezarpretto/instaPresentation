'use strict';

angular.module('instaPresentation', [
  'ngRoute'
])
.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/slide/:hashtag', {
        templateUrl: 'views/slide.html',
        controller: 'SlideCtrl',
        controllerAs: 'slide'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
