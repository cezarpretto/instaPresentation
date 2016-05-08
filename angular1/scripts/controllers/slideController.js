'use strict';

angular.module('instaPresentation')
  .controller('SlideCtrl', ['PicService', '$timeout', '$routeParams', function (picService, $timeout, $routeParams) {
    var self = this;
    this.hashtag = $routeParams.hashtag;
    this.image = undefined;
    var lastCall = {};

    getPics();

    function getPics(){
      picService.getPics(self.hashtag).then(function(retorno){
        console.log(retorno.data);
        lastCall = retorno.data;
        slideShow(retorno.data.data);
      }).catch(function(e){
        console.error(e);
      });
    };

    function getMore(){
      picService.getMore(lastCall.pagination.next_url).then(function(retorno){
        console.log(retorno.data);
        lastCall = retorno.data;
        slideShow(retorno.data.data);
      }).catch(function(e){
        console.error(e);
      });
    }

    function slideShow(pics){
      var pos = 0;
      self.image = pics[pos].images.standard_resolution.url;
      start();
      function start(){
        if(pos !== pics.length -1){
          var slideTimeout = $timeout(function() {
            pos ++;
            self.image = pics[pos].images.standard_resolution.url;
            start();
          }, 5000);
        }else{
          console.log('cancel');
          $timeout.cancel(slideTimeout);
          if(lastCall.pagination.next_url){
            console.log('getMore');
            getMore();
          }else{
            var lastSlide = $timeout(function() {
              getPics();
            }, 5000);
          }
        }
      };
    };

    // function launchIntoFullscreen() {
    //   var element = document.getElementById('imgFull');
    //   console.log(element);
    //   if(element.requestFullscreen) {
    //     element.requestFullscreen();
    //   } else if(element.mozRequestFullScreen) {
    //     element.mozRequestFullScreen();
    //   } else if(element.webkitRequestFullscreen) {
    //     element.webkitRequestFullscreen();
    //   } else if(element.msRequestFullscreen) {
    //     element.msRequestFullscreen();
    //   }
    // }
  }]);
