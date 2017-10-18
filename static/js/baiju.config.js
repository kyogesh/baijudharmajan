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
            when('/gallery', {
                template: '<gallery></gallery>'
            }).
            otherwise('/home');
        }
    ]).
    run(['$rootScope', '$http', '$cookies', function ($rootScope, $http, $cookies) {
        $rootScope.$on('$routeChangeStart', function (event) {
            // Create a list of routes which should be accessible without login
            // $window.location.href = "/#!/home";
            $http.defaults.headers.post['X-CSRFToken'] = $cookies.get('csrftoken');
            $http.defaults.headers.post['xsrfCookieName'] = $cookies.get('csrftoken');
            $http.defaults.headers.post['xsrfHeaderName'] = $cookies.get('X-CSRFToken');
        });
    }]);
}());
