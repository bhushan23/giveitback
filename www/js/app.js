// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'ngMap', 'app.controllers', 'app.routes', 'app.services', 'app.directives'])

.run(function($ionicPlatform) {

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    Parse.initialize('MxMPx8i3iAV99mRuGz9H7Xc4AXPzkXZYVGjXxg6q', 'AY8E0jvznAxxF8zDbmdrYZRwMKjBKD4cvtjaDtzy');
      var currentUser = Parse.User.current();
      $rootScope.user = null;
      $rootScope.isLoggedIn = false;

      if (currentUser) {
          $rootScope.user = currentUser;
          $rootScope.isLoggedIn = true;
          $state.go('app.home');
      } else {
          $state.go('login');
      }
  });
}).config(['$ionicConfigProvider', function($ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom'); // other values: top

}]);
