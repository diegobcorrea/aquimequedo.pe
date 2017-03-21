"use strict"

var app = angular.module('amqApp', [
    'ngRoute',
    'mgcrea.bootstrap.affix',
    'ngBackstretch',
    'angular-owl-carousel-2'
]);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            controller: 'HomeController',
            templateUrl: 'site/views/home.html'
        })
        .when('/edificio/:buildId', {
            controller: 'BuildController',
            templateUrl: 'site/views/build.html'
        })
        .otherwise( { redirectTo: '/' } );

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});

// Define the `PhoneListController` controller on the `phonecatApp` module
angular.module('amqApp').controller('MainController', function MainController($scope) {
    $scope.name = 'world';
});