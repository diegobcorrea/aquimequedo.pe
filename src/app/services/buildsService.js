(function() {
    var buildsService = function($http) {
        var builds = {};

        this.getBuilds = function() {
            return $http.get('site/js/builds.json');
        };

        this.getBuild = function() {
            return $http.get('site/js/builds.json');
        };

    };

    buildsService.$inject = ['$http'];

    angular.module('amqApp').service('buildsService', buildsService);

}());