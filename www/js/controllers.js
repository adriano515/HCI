angular.module('app.controllers', [])

.controller('inicioCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, $ionicPopup) {
  $scope.data = {};

  $scope.login = function() {
    var login = window.localStorage.getItem($scope.data.email);
    if(login == null){
      var alertPopup = $ionicPopup.alert({
        title: 'Cuenta incorrecta!',
        template: 'Revisar campos!'
      });
      alertPopup.then(function(res) {
        // Custom functionality....
      });
    }
    else{
      var pass = window.localStorage.getItem($scope.data.email);
      if (pass == $scope.data.pass){
        window.localStorage.setItem('actual',$scope.data.email);
        $state.go('home');
      }
      else{
        var alertPopup = $ionicPopup.alert({
          title: 'Cuenta incorrecta!',
          template: 'Revisar campos!'
        });
        alertPopup.then(function(res) {
          // Custom functionality....
        });
      }
    }
  }
})

.controller('crearUnaCuentaCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {
  $scope.data = {};

  $scope.createAc = function() {
    window.localStorage.setItem($scope.data.email, $scope.data.pass);
    $state.go('inicio');
  }
})

.controller('homeCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, $ionicPopup) {

  $scope.data = {};

  $scope.search = function () {
    console.log($scope.data.search);
    $state.go('vehiculos')
  }

})

.controller('ajustesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('postearVehiculoCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, $ionicPopup) {

  $scope.data = {};

  $scope.createVehicle = function() {
    var vehicles = window.localStorage.getItem("vCounter");
    if (vehicles == null) {
      window.localStorage.setItem("vCounter", 0);
      vehicles = 0;
    }
    if ($scope.data.model != null && $scope.data.price != null) {
      var array = [
        $scope.data.model,
        $scope.data.price
      ];
      window.localStorage.setItem("vehicles" + vehicles, array);
      window.localStorage.setItem("vCounter", vehicles + 1);

      $state.go('vistaDeVehiculo');
    }

  else{
    var alertPopup = $ionicPopup.alert({
      title: 'Campo modelo y precio incorrecto!',
      template: 'Revisar campos!'
    });
    alertPopup.then(function(res) {
      // Custom functionality....
    });
  }

}
})

.controller('busquedaAvanzadaCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('vehiculosCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('vistaDeVehiculoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}]);
