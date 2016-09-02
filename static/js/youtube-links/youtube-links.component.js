(function () {
    "use strict";
    angular
        .module('youtubeLinks')
        .component('youtubeLinks', {
            'templateUrl': 'static/html/youtube-links.template.html',
            'controller': ['$window', '$http', function ($window, $http) {
                $http.post('get-links/', {'link_type': 'youtube'}).then(function (response) {
                    this.links = response.data.links;
                });
            }]
        });
}());
