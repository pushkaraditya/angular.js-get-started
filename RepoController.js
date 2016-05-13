(function () {

	var app = angular.module("githubViewer");

	var RepoController = function ($scope, github, $routeParams) {

		$scope.username = $routeParams.username;
		$scope.repo = $routeParams.repo;

		github.getRepo($scope.username, $scope.repo);

	};

	app.controller("RepoController", ["$scope", "github", "$routeParams", RepoController]);
}());