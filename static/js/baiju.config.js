(function () {
    "use strict";
    angular.
    module('baijuD').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.
            when('/home', {
                templateUrl: 'static/html/home.template.html'
            }).
            when('/videos', {
                template: '<youtube-links></youtube-links>'
            }).
            when('/about', {
                template: '<about></about>'
            }).
            otherwise('/home');
        }
    ]).
    run(['$rootScope', '$window', '$httpProvider', function ($rootScope, $window, $httpProvider) {
        $rootScope.$on('$routeChangeStart', function (event) {
            // Create a list of routes which should be accessible without login
            // $window.location.href = "/#!/home";
            $httpProvider.defaults.xsrfCookieName = 'csrftoken';
            $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
        });
    }]);
}());
