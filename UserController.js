(function() {
	var app = angular.module("githubViewer");

	var UserController = function ($scope, github, $routeParams) {
		var onUserComplete = function(data) {
			$scope.user = data;
			github.getRepos($scope.user).then(onReposComplete, onError);
		};

		var onReposComplete = function(repos) {
			$scope.repos = repos;
		};

		var onError = function(reason) {
			$scope.error = "Could not fetch user detail";
		};

		$scope.username = $routeParams.username;
		$scope.repoSortOrder = "-stargazers_count";
		$scope.title = $scope.username + " - Github Viewer";
		github.getUser($scope.username).then(onUserComplete, onError);
	};

	app.controller("UserController", ["$scope", "github", "$routeParams", UserController]);
}());