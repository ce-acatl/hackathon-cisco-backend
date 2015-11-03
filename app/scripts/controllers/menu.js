'use strict';
/**
 * @ngdoc function
 * @name backendApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 */
angular.module('backendApp')
  .controller('MenuCtrl', ["$scope", "Auth",
    function ($scope, Auth) {
      $scope.logout = function(){
        console.log("Bye")
        Auth.$unauth();
      }
  }
]);
