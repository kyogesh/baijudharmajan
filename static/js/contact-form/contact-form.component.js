(function () {
    "use strict";
    angular
        .module('contactForm')
        .component('contactForm', {
            'templateUrl': 'static/html/contact-form.template.html',
            'controller': ['$rootScope', '$window', '$http', function ($rootScope, $window, $http) {
                self = this;
                this.regarding = 'none';
                this.regardingOptions = {
                    'None': 'none',
                    'Events': 'events',
                    'Promotion': 'promo',
                    'Endorsement': 'endorse',
                    'Collaboration': 'collab'
                }
                this.setRegarding = function () {
                    console.log(this.regarding);
                };
                var config = { 'headers': {
                    'Content-Type': 'application/json',
                    'Authorization': undefined,
                    }};
                var data = {};
                this.send = function () {
                    data.name = this.name;
                    data.email = this.email;
                    data.phone = this.phone;
                    data.message = this.message;
                    data.regarding = this.regarding;
                    $http.post('contact/', data, config).then(function successCallback (response) {
                        $window.alert("Message Sent.")
                        self.links = response.data.links;
                        self.name = '';
                        self.email = '';
                        self.phone = '';
                        self.message = '';
                        self.regarding = 'None';
                        }, function errorCallback (response) {
                        $window.alert("Unable to send message, please try again.")
                    });
                };
            }]
        });
}());
