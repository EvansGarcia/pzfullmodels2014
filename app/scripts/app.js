'use strict';

angular.module('pzfullmodelsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'wu.masonry'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/MariaRamirez', {
        templateUrl: 'views/MariaRamirez.html',
        controller: 'MariaRamirezCtrl'
      })
      .when('/MadelenOrtiz', {
        templateUrl: 'views/MadelenOrtiz.html',
        controller: 'MadelenOrtizCtrl'
      })
      .when('/KeilynSaldana', {
        templateUrl: 'views/KeilynSaldana.html',
        controller: 'KeilynSaldanaCtrl'
      })
      .when('/SiannyMunoz', {
        templateUrl: 'views/SiannyMunoz.html',
        controller: 'SiannyMunozCtrl'
      })
      .when('/DayannaFonseca', {
        templateUrl: 'views/DayanaFonseca.html',
        controller: 'DayanaFonsecaCtrl'
      })
      .when('/JessicaVillegas', {
        templateUrl: 'views/JessicaVillegas.html',
        controller: 'JessicaVillegasCtrl'
      })
      .when('/JessicaTatianaAlfaro', {
        templateUrl: 'views/JessicaTatianaAlfaro.html',
        controller: 'JessicaTatianaAlfaroCtrl'
      })
      .when('/IngridAraya', {
        templateUrl: 'views/IngridAraya.html',
        controller: 'IngridArayaCtrl'
      })
      .when('/KristelGodinez', {
        templateUrl: 'views/KristelGodinez.html',
        controller: 'KristelGodinezCtrl'
      })
      .when('/SamantaOrtiz', {
        templateUrl: 'views/SamantaOrtiz.html',
        controller: 'SamantaOrtizCtrl'
      })
      .when('/MargaretValeskyCastro', {
        templateUrl: 'views/MargaretValeskyCastro.html',
        controller: 'MargaretValeskyCastroCtrl'
      })
      .when('/JazminBorbon', {
        templateUrl: 'views/JazminBorbon.html',
        controller: 'JazminBorbonCtrl'
      })
      .when('/PamelaMora', {
        templateUrl: 'views/PamelaMora.html',
        controller: 'PamelaMoraCtrl'
      })
      .when('/HeylinRojas', {
        templateUrl: 'views/HeylinRojas.html',
        controller: 'HeylinRojasCtrl'
      })
      .when('/BrendaGamboa', {
        templateUrl: 'views/BrendaGamboa.html',
        controller: 'BrendaGamboaCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
