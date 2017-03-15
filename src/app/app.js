"use strict"

var app = angular.module('amqApp', [
    'mgcrea.bootstrap.affix',
    'ngBackstretch',
    'angular-owl-carousel-2'
]);

// Define the `PhoneListController` controller on the `phonecatApp` module
app.controller('MainController', function MainController($scope) {
    $scope.name = 'world';
});

app.controller('CarruselCtrl', function($scope){
    var owlAPi;
    $scope.items = [
        'site/images/home-carrusel.jpg',
        'site/images/home-carrusel-02.jpg'
    ];

    $scope.properties = {
        // autoHeight:true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        lazyLoad: true,
        items: 1,
        autoplay: true,
        dots: false,
        loop: true
    };

    $scope.ready = function ($api) {
        owlAPi = $api;
    };
});