'use strict';

angular.module('instaPresentation')
  .service('PicService', ['$http', function ($http) {
    var self = this;
    this.userId = '';
    this.language = 'en';
    this.getPics = function(hashtag){
      var url = 'https://api.instagram.com/v1/tags/'+ hashtag +'/media/recent/?access_token=16384709.6ac06b4.49b97800d7fd4ac799a2c889f50f2587&callback=JSON_CALLBACK';
      return $http.jsonp(url);
    };

    this.getMore = function(url){
      return $http.jsonp(url+'&callback=JSON_CALLBACK');
    };

    this.setUserId = function(userId){
      self.userId = userId;
    };

    this.setLanguage = function(language){
      self.language = language;
    };

    this.getLanguage = function(){
      return self.translate[self.language];
    };

    this.show = function(modalId){
      $('#' + modalId).modal('show');
    };

    this.translate = {
      ptBr:{
        LOADING: 'Carregando...',
        LOAD_MORE: 'Mais Fotos',
        PERSON: 'pessoa',
        PEOPLE: 'pessoas',
        OTHER: 'outra',
        OTHERS: 'outras',
        COMMENTS: 'Comentários',
        PEOPLE_IN_PHOTO: 'Pessoas na foto',
        AND: 'e',
        CANT_LOAD_FEED: 'Não foi possível carregar o feed de fotos!',
        TRY_AGAIN: 'Tentar novamente'
      },
      en:{
        LOADING: 'Loading...',
        LOAD_MORE: 'Load More',
        PERSON: 'person',
        PEOPLE: 'people',
        OTHER: 'other',
        OTHERS: 'others',
        COMMENTS: 'Comments',
        PEOPLE_IN_PHOTO: 'People in photo',
        AND: 'and',
        CANT_LOAD_FEED: 'Can\'t load the feed!',
        TRY_AGAIN: 'Try again.'
      },
      de:{
        LOADING: 'Laden...',
        LOAD_MORE: 'Mehr laden',
        PERSON: 'person',
        PEOPLE: 'menschen',
        OTHER: 'andere',
        OTHERS: 'andere',
        COMMENTS: 'Bemerkungen',
        PEOPLE_IN_PHOTO: 'Abgebildeten Personen',
        AND: 'und',
        CANT_LOAD_FEED: 'Can\'t load the feed!',
        TRY_AGAIN: 'Versuch es noch einmal.'
      },
      it:{
        LOADING: 'Caricamento...',
        LOAD_MORE: 'Carica altro',
        PERSON: 'persona',
        PEOPLE: 'persone',
        OTHER: 'altro',
        OTHERS: 'altrui',
        COMMENTS: 'Commenti',
        PEOPLE_IN_PHOTO: 'Persone nella foto',
        AND: 'e',
        CANT_LOAD_FEED: 'Non può caricare!',
        TRY_AGAIN: 'Prova ancora.'
      },
      es:{
        LOADING: 'Cargando...',
        LOAD_MORE: 'Carga más',
        PERSON: 'persona',
        PEOPLE: 'personas',
        OTHER: 'otro',
        OTHERS: 'otros',
        COMMENTS: 'Comentarios',
        PEOPLE_IN_PHOTO: 'Personas de la fotografía',
        AND: 'y',
        CANT_LOAD_FEED: 'No puede cargar!',
        TRY_AGAIN: 'Inténtalo de nuevo.'
      }
    };
  }]);
