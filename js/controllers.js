angular.module('imdbApp.controllers', [])

.controller('movieCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.orderby = "title";
	$scope.limitto = 10;

	$http.get('./data/imdb250.json').success(function(data) {
		$scope.movies = data;
		$scope.artistOrder = 'name';
	});
}])

.controller('detailCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
	var idx = $routeParams.movieID;
	$scope.idx = +idx;

	$http.get('./data/imdb250.json').success(function(data) {
		$scope.movie = data[idx];
	});
}])

.controller('galleryCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
	//var idx = $routeParams.movieID;
	//$scope.idx = +idx;

	$http.get('./data/imdb250.json').success(function(data) {
		$scope.movies = data;
	});
}]);