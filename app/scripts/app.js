'use strict';

/**
 * @ngdoc overview
 * @name backendApp
 * @description
 * # backendApp
 *
 * Main module of the application.
 */
angular.module('backendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'firebase.ref',
    'firebase.auth',
    'google.places',
    'ngTagsInput'
  ])

.config(function(tagsInputConfigProvider) {
  tagsInputConfigProvider
    .setDefaults('tagsInput', {
      minLength: 1,
      addOnEnter: true
    })
});
