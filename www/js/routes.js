angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('inicio', {
    url: '/logIn',
    templateUrl: 'templates/inicio.html',
    controller: 'inicioCtrl'
  })

  .state('crearUnaCuenta', {
    url: '/signUp',
    templateUrl: 'templates/crearUnaCuenta.html',
    controller: 'crearUnaCuentaCtrl'
  })

  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('ajustes', {
    url: '/options',
    templateUrl: 'templates/ajustes.html',
    controller: 'ajustesCtrl'
  })

  .state('postearVehiculo', {
    url: '/postCar',
    templateUrl: 'templates/postearVehiculo.html',
    controller: 'postearVehiculoCtrl'
  })

  .state('busquedaAvanzada', {
    url: '/advancedSearch',
    templateUrl: 'templates/busquedaAvanzada.html',
    controller: 'busquedaAvanzadaCtrl'
  })

  .state('vehiculos', {
    url: '/vehicles',
    templateUrl: 'templates/vehiculos.html',
    controller: 'vehiculosCtrl'
  })

  .state('vistaDeVehiculo', {
    url: '/vehicle',
    templateUrl: 'templates/vistaDeVehiculo.html',
    controller: 'vistaDeVehiculoCtrl'
  })

$urlRouterProvider.otherwise('/logIn')

  

});