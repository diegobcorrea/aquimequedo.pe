/**
 * Created by diegobecerra on 3/20/17.
 */
(function() {

    var HomeController = function ($scope, $log, $q, buildsService) {
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

        $scope.builds = [];

        buildsService.getBuilds()
            .then(function(response) {
                if (typeof response.data === 'object') {
                    $scope.builds = response.data;
                } else {
                    // invalid response
                    return $q.reject(response.data);
                }
            }, function(data, status, headers, config) {
                $log.log(data.error + ' ' + status);
            });
    };

    HomeController.$inject = ['$scope', '$log', '$q', 'buildsService'];

    angular.module('amqApp')
        .controller('HomeController', HomeController);

}());