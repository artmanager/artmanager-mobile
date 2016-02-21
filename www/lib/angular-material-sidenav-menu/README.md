# material-sidenav-menu

Angular Material Sidenav Menu

[Material Design](https://www.google.com/design/spec/material-design/) is a specification for a
unified system of visual, motion, and interaction design that adapts across different devices. Our
goal is to deliver a lean, lightweight set of AngularJS-native UI elements that implement the
material design specification for use in Angular single-page applications (SPAs).

Visit [Angular-Material](https://github.com/angular/material) for more
details on how to install and use the Angular Material distribution files within your own local
project.

#### Bower

Change to your project's root directory.

```bash
# To get the latest stable version, use Bower from the command line.
bower install angular-material-sidenav-menu

# To get the most recent, latest committed-to-master version use:
bower install angular-material-sidenav-menu#master
```


#### How to use

##### file.html
```
html
  <head>

    <!-- Angular Material CSS now available via Google CDN; version 0.10 used here -->
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/angular_material/0.10.0/angular-material.min.css">

    <!-- Angular Material Menu Sidenav via bower components -->
    <link rel="stylesheet" href="bower_components/angular-material-sidenav-menu/material-menu-sidenav.min.css">

  </head>
  <body layout="column" ng-controller="AppCtrl">

  <md-toolbar layout="row">
      <div class="md-toolbar-tools">

          <md-button ng-click="toggleSidenav('left')" class="md-icon-button">
              <md-icon>
                  <i class="material-icons md-24">menu</i>
              </md-icon>
          </md-button>

          <h1>Service</h1>
      </div>
  </md-toolbar>

  <div layout="row" flex>
      <md-sidenav style="overflow-y: scroll" layout="column" class="md-sidenav-left md-whiteframe-z2"
                  md-component-id="left">

          <div layout="row" layout-padding>
              <h1 class="md-title">olimou/material-sidenav-menu</h1>
          </div>

          <md-divider></md-divider>

          <md-menu-sidenav>
              <md-menu-sidenav-item>
                  <md-menu-sidenav-title>
                      <md-toogle-menu layout="row" flex>
                          <md-icon flex="15">face</md-icon>
                          <h1 class="md-body-2" flex>Mapa</h1>
                      </md-toogle-menu>

                      <md-icon flex="15">pause</md-icon>
                  </md-menu-sidenav-title>

                  <md-menu-sidenav-content>
                      <md-menu-sidenav-subitem>Item 1</md-menu-sidenav-subitem>
                      <md-menu-sidenav-subitem>Item 2</md-menu-sidenav-subitem>
                      <md-menu-sidenav-subitem>Item 3</md-menu-sidenav-subitem>
                  </md-menu-sidenav-content>
              </md-menu-sidenav-item>

              <md-divider></md-divider>

              <md-menu-sidenav-item>
                  <md-menu-sidenav-title>
                      <md-toogle-menu layout="row" flex>
                          <md-icon flex="15">face</md-icon>
                          <h1 class="md-body-2" flex>Mapa</h1>
                          <md-icon flex="15">pause</md-icon>
                      </md-toogle-menu>

                  </md-menu-sidenav-title>

                  <md-menu-sidenav-content>
                      <md-menu-sidenav-subitem>Item 1</md-menu-sidenav-subitem>
                      <md-menu-sidenav-subitem>Item 2</md-menu-sidenav-subitem>
                      <md-menu-sidenav-subitem>Item 3</md-menu-sidenav-subitem>
                      <md-menu-sidenav-subitem>Item 4</md-menu-sidenav-subitem>
                  </md-menu-sidenav-content>
              </md-menu-sidenav-item>
          </md-menu-sidenav>
      </md-sidenav>

      <div layout="column" flex id="content">
          <md-content layout="column" flex class="md-padding" ng-view="">

          </md-content>
      </div>
  </div>

    <!-- Angular Material Dependencies -->
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-animate.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-aria.min.js"></script>


    <!-- Angular Material Javascript now available via Google CDN; version 0.10 used here -->
    <script src="https://ajax.googleapis.com/ajax/libs/angular_material/0.10.0/angular-material.min.js"></script>

    <!-- Angular Material Menu Sidenav via bower components -->
    <script src="/bower_components/angular-material-sidenav-menu/material-menu-sidenav.min.js"></script>
  </body>
</html>
```

##### app.js
```
var module = angular.module('App', ['ngMaterial', 'ngMenuSidenav']);

module.controller('AppCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
    $scope.index = 0;

    $scope.toggleSidenav = function (menuId) {
        $mdSidenav(menuId).toggle();
    };
}]);
```