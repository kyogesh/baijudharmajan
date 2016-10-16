(function () {
    "use strict";
    angular
        .module('youtubeLinks')
        .component('youtubeLinksInline', {
            'templateUrl': 'static/html/youtube-links-inline.template.html',
            'controller': ['$window', '$http', function ($window, $http) {
                self = this;
                var config = { 'headers': {
                    'Content-Type': 'application/json',
                    }};
                $http({
                    url: 'get-links/',
                    method: "GET",
                    params: {'link_type': 'youtube'},
                    headers: config}).then(function (response) {
                        self.links = response.data.links;
                });
            }]
        });
}());
