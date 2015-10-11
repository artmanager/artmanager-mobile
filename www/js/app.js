// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('artmanager', [
                          'ionic', 
                          'controllers.appController',
                          'controllers.loginController',
                          'controllers.dashboardController',
                          'services.loginService',
                          'services.utilService',
                          'ionic-material', 
                          'ionMdInput'
                          ]);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.config(function ($urlRouterProvider, $stateProvider, $ionicConfigProvider) {
    $ionicConfigProvider.views.maxCache(0);
    
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })
       .state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            }
        }
    })
    .state('app.dashboard', {
        url: '/dashboard',
        views: {
            'menuContent': {
                templateUrl: 'templates/dashboard.html',
                controller: 'DashboardCtrl'
            }
        }
    })  
      
   $urlRouterProvider.otherwise('/app/login');
});
