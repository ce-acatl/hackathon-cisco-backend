'use strict';
/**
 * @ngdoc function
 * @name backendApp.controller:StoresCtrl
 * @description
 * # StoresCtrl
 */
angular.module('backendApp')
  .controller('StoresCtrl', ["$scope", "Ref", "$firebaseArray", "$timeout","$firebaseObject","$filter",
    function ($scope, Ref, $firebaseArray, $timeout,$firebaseObject, $filter) {
      $scope.stores = $firebaseArray(Ref.child('stores'));
      $scope.malls = $firebaseArray(Ref.child('malls'));
      // display any errors
      $scope.stores.$loaded().catch(alert);
      $scope.malls.$loaded().catch(alert);
      console.log($scope.stores,$scope.malls);

      // Ref.child('stores').on("child_added", function(isnap) {
      //   Ref.child('malls').child(isnap.child("mall").key()).once("value", function(dsnap) {
      //     console.log(dsnap.val(),isnap.key(),dsnap.key(),isnap.val());
      //   });
      // });

      $scope.map;

      $scope.loadMap = function(){
        var mall = $filter("mallById")($scope.newStore.mall,$scope.malls);
        // $scope.mapStyle = { 
        //   "background": "url('"+mall.map+"')",
        //   "background-size": "100% 100%"
        // }
        // console.log($scope.mapStyle);
        
        var extent = [0, 0, 1024, 968];
        var projection = new ol.proj.Projection({
          code: 'xkcd-image',
          units: 'pixels',
          extent: extent
        });
        console.log($filter("authTempUrl")(mall.map,"learning:learning"));
        $scope.map = new ol.Map({
          layers: [
            new ol.layer.Image({
              source: new ol.source.ImageStatic({
                attributions: [
                  new ol.Attribution({
                    html: '&copy; <a href="http://xkcd.com/license.html">xkcd</a>'
                  })
                ],
                //url: $filter("authTempUrl")(mall.map,"learning:learning"),
                url: mall.map,
                projection: projection,
                imageExtent: extent
              })
            })
          ],
          target: 'map',
          view: new ol.View({
            projection: projection,
            center: ol.extent.getCenter(extent),
            zoom: 1
          })
        });
      }

      $scope.recordEvent = function(e){
        jQuery("#map i").remove();
        console.log(e);
        var x = e.offsetX;
        var y = e.offsetY;
        var icon = "<i style='top:"+y+"px;left:"+x+"px' class='absolute glyphicon glyphicon-map-marker'></i>";
        jQuery("#map").append(icon);
        $scope.newStore.x = x;
        $scope.newStore.y = y;
          
      }

      $scope.addStore = function(newStore) {
        if(newStore) {
          $scope.stores.$add({
            name: newStore.name, 
            mall: newStore.mall,
            location: {
              x: newStore.x,
              y: newStore.y
            }
          }).catch(alert);
        }
      };

      $scope.removeStore = function(store){
        $scope.stores.$remove(store).catch(alert);
      }

      $scope.saveStore = function(store){
        $scope.malls.$save(store);
      }

      function alert(msg) {
        $scope.err = msg;
        $timeout(function() {
          $scope.err = null;
        }, 5000);
      }
    }
]);