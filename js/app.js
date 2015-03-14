var imdbApp = angular.module('imdbApp', ['ngRoute', 'ngAnimate', 'imdbApp.controllers'])

// configure our routes
.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : 'partials/list.html',
            controller  : 'movieCtrl'
        })

        .when('/gallery', {
            templateUrl : 'partials/gallery.html',
            controller  : 'galleryCtrl'
        })

        .when('/details/:movieID', {
            templateUrl : 'partials/details.html',
            controller  : 'detailCtrl'
        })

        .otherwise({
        	redirectTo: '/'
        });
});
