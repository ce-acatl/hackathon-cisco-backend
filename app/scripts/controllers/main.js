'use strict';

/**
 * @ngdoc function
 * @name backendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the backendApp
 */
angular.module('backendApp')
.controller('MainCtrl', ["$scope",
  	function ($scope) {
	    $scope.awesomeThings = [
		  'HTML5 Boilerplate',
		  'AngularJS',
		  'Karma'
	    ];
	}
]);
