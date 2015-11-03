'use strict';
/**
 * @ngdoc function
 * @name backendApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 */



angular.module('backendApp')
  .controller('ProductsCtrl', ["$scope", "Ref", "$firebaseArray", "$timeout", "$filter",
    function ($scope, Ref, $firebaseArray, $timeout, $filter) {
      $scope.products = $firebaseArray(Ref.child('products'));
      $scope.allStores = $firebaseArray(Ref.child('stores'));
      $scope.malls = $firebaseArray(Ref.child('malls'))
      // display any errors
      $scope.products.$loaded().catch(alert);

      $scope.genders = ["male","female"];

      $scope.brands = ["dockers","nike","zara","cuidado con el perro","mascara de latex","piel de toro","j.pouns","optima"];

      $scope.loadStores = function(mallId){
        $scope.stores = $filter("storesOfMall")(mallId,$scope.allStores);
      }

      $scope.addProduct = function(newProduct) {
        if(newProduct) {
          var pp = {
            name: newProduct.name,
            gender: newProduct.gender,
            img: newProduct.img,
            mall: newProduct.mall,
            store: newProduct.store,
            price: newProduct.price,
            discount: newProduct.discount,
            hidden_discount: newProduct.hidden_discount,
            tags: $filter("justTags")(newProduct.tags),
            sizes: $filter("justTags")(newProduct.sizes)
          };
          $scope.products.$add(pp).catch(alert);
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
  }
]);