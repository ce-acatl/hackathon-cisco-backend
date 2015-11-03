'use strict';
/**
 * @ngdoc function
 * @name backendApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 */
angular.module('backendApp')
  .controller('ProductsCtrl', function ($scope, Ref, $firebaseArray, $timeout) {
    $scope.products = $firebaseArray(Ref.child('products').limitToLast(10));
    // display any errors
    $scope.products.$loaded().catch(alert);

    $scope.addProduct = function(newProduct) {
      if(newProduct) {
        $scope.products.$add(newProduct).catch(alert);
      }
    };

    $scope.removeProduct = function(product){
      $scope.products.$remove(product).catch(alert);
    }

    $scope.saveProduct = function(product){
        $scope.products.$save(product);
      }

    function alert(msg) {
      $scope.err = msg;
      $timeout(function() {
        $scope.err = null;
      }, 5000);
    }
  });