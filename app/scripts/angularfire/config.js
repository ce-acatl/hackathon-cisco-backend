angular.module('firebase.config', [])
  .constant('FBURL', 'https://mall-flow.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password'])

  .constant('loginRedirectPath', '/login');
