(function () {

	var app = angular.module("githubViewer");

	var RepoController = function ($scope, github, $routeParams, page) {

		var onReposComplete = function(repo) {
			$scope.repo = repo;
			github.getContributors(repo).then(onContributorsComplete, onError);
		};

		var onContributorsComplete = function (contributors) {
			$scope.contributors = contributors;
		}

		var onError = function(reason) {
			$scope.error = "Could not fetch user detail";
		};

		$scope.username = $routeParams.username;
		$scope.reponame = $routeParams.repo;

		page.setTitle($scope.reponame + " from " + $scope.username);

		github.getRepo($scope.username, $scope.reponame).then(onReposComplete, onError);
	};

	app.controller("RepoController", ["$scope", "github", "$routeParams", "page", RepoController]);
}());