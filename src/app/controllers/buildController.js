/**
 * Created by diegobecerra on 3/20/17.
 */
(function() {

    var BuildController = function ($scope, $routeParams, buildsService) {
        var buildId = $routeParams.buildId;
        $scope.build = null;

        function init() {

            buildsService.getBuild()
                .then(function(response) {
                    for (var i=0,len=response.data.length;i<len;i++) {
                        if (response.data[i].buildId === parseInt(buildId)) {
                            $scope.build = response.data[i];
                        }
                    }
                }, function(data, status, headers, config) {
                    //handle error
                });

        }

        init();
    };

    BuildController.$inject = ['$scope', '$routeParams', 'buildsService'];

    angular.module('amqApp')
        .controller('BuildController', BuildController);

}());