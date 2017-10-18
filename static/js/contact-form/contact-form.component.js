(function () {
    "use strict";
    angular
        .module('contactForm')
        .component('contactForm', {
            'templateUrl': 'static/html/contact-form.template.html',
            'controller': ['$rootScope', '$window', '$http', '$location', function ($rootScope, $window, $http, $location) {
                self = this;
                this.regarding = 'none';
                this.regardingOptions = {
                    'None': 'none',
                    'Events': 'events',
                    'Promotion': 'promo',
                    'Endorsement': 'endorse',
                    'Collaboration': 'collab'
                };
                var config = { 'headers': {
                    'Content-Type': 'application/json',
                    'Authorization': undefined
                    }};
                var data = {};
                this.send = function () {
                    data.name = this.name;
                    data.email = this.email;
                    data.phone = this.phone;
                    data.message = this.message;
                    data.regarding = this.regarding;
                    $http.post('contact/', data, config).then(function successCallback (response) {
                        $location.path('#!/');
                        }, function errorCallback (response) {
                        $window.alert("Unable to send message, please try again.")
                    });
                };
            }]
        });
}());
