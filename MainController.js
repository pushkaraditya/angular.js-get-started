(function() {
	var app = angular.module("githubViewer");

	var MainController = function ($scope, $interval, $location, page) {

		var decrementCountDown = function() {
			$scope.countdown -= 1;
			if ($scope.countdown < 1)
				$scope.search($scope.username);
		};

		var countdownInterval = null;
		var startCountDown = function() {
			countdownInterval = $interval(decrementCountDown, 1000, $scope.countdown);
		};

		$scope.search = function(username) {
			if(countdownInterval) {
				$interval.cancel(countdownInterval);
				$scope.countdown = null;
			}
			$location.path("/user/" + username);
		};

		$scope.username = "Angular";
		$scope.countdown = 5;
		page.setTitle("Search");
		startCountDown();
	};

	app.controller("MainController", ["$scope", "$interval", "$location", "page", MainController]);
}());