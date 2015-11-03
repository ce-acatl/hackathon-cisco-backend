'use strict';

/**
 * @ngdoc function
 * @name backendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the backendApp
 */
angular.module('backendApp')
.controller('MainCtrl', ["$scope","AppF",
  	function ($scope, AppF) {
	    $scope.awesomeThings = [
		  'HTML5 Boilerplate',
		  'AngularJS',
		  'Karma'
	    ];
	    $scope.F = AppF;
	}
]);
