(function () {
    "use strict";
    angular
        .module('gallery')
        .component('gallery', {
            'templateUrl': 'static/html/gallery.template.html',
            'controller': ['$http', function ($http) {
                self = this;
                $http.get('/gallery').then(function (response) {
                    self.photos = response.data;
                });

            }]
        });
}());
