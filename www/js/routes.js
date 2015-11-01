angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
      
    .state('welcome', {
        url: '/welcome',
        templateUrl: 'templates/welcome.html',
        controller: 'welcomeCtrl'
     })
                
    .state('tab.map', {
      url: '/map',
      views: {
        'tab1': {
          templateUrl: 'templates/map.html',
          controller: 'mapCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tab.home', {
      url: '/home',
      views: {
        'tab2': {
          templateUrl: 'templates/home.html',
          controller: 'homeCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tab.shareGiveBacks', {
      url: '/share-give-back',
      views: {
        'tab3': {
          templateUrl: 'templates/shareGiveBacks.html',
          controller: 'shareGiveBacksCtrl'
        }
      }
    })
        
      
    
      
    .state('tab', {
      url: '/tabs',
      abstract:true,
      templateUrl: 'templates/giveItBack.html'
    })
      
    
      
        
    .state('tab.notifications', {
      url: '/notification',
      views: {
        'tab4': {
          templateUrl: 'templates/notifications.html',
          controller: 'notificationsCtrl'
        }
      }
    })
        
      
    
      
        
    .state('shareGiveBacks.suggestGiveBacks', {
      url: '/suggest-give-backs',
      templateUrl: 'templates/suggestGiveBacks.html',
      controller: 'suggestGiveBacksCtrl'
    })
        
      
    
      
        
    .state('tab.profile', {
      url: '/user-profile',
      views: {
        'tab5': {
          templateUrl: 'templates/profile.html',
          controller: 'profileCtrl'
        }
      }
    })
        
      
    
      
        
    .state('login', {
      url: '/user-login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
        
    .state('signup', {
      url: '/user-signup',
      templateUrl: 'templates/signup.html',
      controller: 'signupCtrl'
    })
      

     .state('forgot', {
       url: '/user-forgot',
       templateUrl: 'templates/forgotpassword.html',
       controller: 'forgotPasswordCtrl'
    })  
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tabs/map');

});