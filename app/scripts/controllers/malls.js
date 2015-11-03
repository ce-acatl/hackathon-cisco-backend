'use strict';
/**
 * @ngdoc function
 * @name backendApp.controller:MallsCtrl
 * @description
 * # MallsCtrl
 */
angular.module('backendApp')
  .controller('MallsCtrl', ["$scope", "Ref", "$firebaseArray", "$timeout",
    function ($scope, Ref, $firebaseArray, $timeout, AppF) {
    $scope.malls = $firebaseArray(Ref.child('malls'));
    // display any errors
    $scope.malls.$loaded().catch(alert);

    $scope.addMall = function(newMall) {
      if(newMall) {
        $scope.malls.$add({
          name: newMall.name,
          location: newMall.location.formatted_address,
          map: newMall.map
        }).catch(alert);
      }
    };

    $scope.removeMall = function(mall){
      $scope.malls.$remove(mall).catch(alert);
    }

    $scope.saveMall = function(mall){
      mall.location = (angular.isUndefined(mall.location.formatted_address)) ? mall.location : mall.location.formatted_address;
      $scope.malls.$save(mall);
    }

    function alert(msg) {
      $scope.err = msg;
      $timeout(function() {
        $scope.err = null;
      }, 5000);
    }
  }
]);
