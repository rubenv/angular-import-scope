angular.module('testapp', ['rt.importscope']);

var app = angular.module('testapp');

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/pageA");

    $stateProvider.state('app', {
        abstract: true,
        templateUrl: 'main.html'
    });

    $stateProvider.state('app.pageA', {
        url: '/pageA',
        views: {
            content: {
                templateUrl: 'pageA.html',
                controller: 'TestController'
            }
        }
    });

    $stateProvider.state('app.pageB', {
        url: '/pageB',
        views: {
            content: {
                templateUrl: 'pageB.html',
            }
        }
    });
});

app.controller('TestController', function ($scope) {
    $scope.title = 'Test';
});
