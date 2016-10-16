(function () {
    "use strict";
    angular
        .module('contactForm')
        .component('contactForm', {
            'templateUrl': 'static/html/contact-form.template.html',
            'controller': ['$window', '$http', function ($window, $http) {
                self = this;

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
                    debugger;
                    $http.post('contact/', data, config).then(function (response) {
                        self.links = response.data.links;
                    });
                };
            }]
        });
}());
