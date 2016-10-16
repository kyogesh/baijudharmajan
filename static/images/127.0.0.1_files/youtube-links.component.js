(function () {
    "use strict";
    angular
        .module('youtubeLinks')
        .component('youtubeLinks', {
            'templateUrl': 'static/html/youtube-links.template.html',
            'controller': ['$window', '$http', function ($window, $http) {
                self = this;
                this.links_hc = [{"video": "https://www.youtube.com/embed/9o0c0aItpKo",
                                 "id": 1, "link_type": "youtube"},
                               ]
                var config = { 'headers': {
                    'Content-Type': 'application/json',
                    'Authorization': undefined,
                    }};
                $http.post('get-links/', {'link_type': 'youtube'}, config).then(function (response) {
                    self.links = response.data.links;
                });
            }]
        });
}());
