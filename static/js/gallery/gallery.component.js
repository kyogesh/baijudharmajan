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

                    // Get the modal
                this.modal = angular.element(document.querySelector('#myModal'));
                // Get the image and insert it inside the modal - use its "alt" text as a caption
                this.modalImg = angular.element(document.querySelector("#img01"));
                this.captionText = angular.element(document.querySelector("#caption"));
                this.img_click = function(){
                    self.modal.attr('style', 'display: block');
                    var img = angular.element(document.querySelector('#myImg'));
                    var caption = angular.element(document.querySelector('.rig-text'));
                    self.modalImg[0].src = img[0].src;
                    self.captionText.innerHTML = caption.text();
                }

                // Get the <span> element that closes the this.modal
                this.span = document.querySelector(".close")[0];

                // When the user clicks on <span> (x), close the this.modal
                this.close_modal = function() {
                  self.modal.attr('style', 'display : none');
                };

            }]
        });
}());
