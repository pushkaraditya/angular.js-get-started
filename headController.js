(function () {
	var headController = function (page, $scope) {
		$scope.title = page.title();
	};

	var app = angular.module("githubViewer");
	app.controller("headController", ["page", "$scope", headController]);
}());