(function () {

	var page = function () {
		var title = "Github Viewer";

		return {
			title: function () {
				return title;
			},
			setTitle: function (newTitle) {
				title = newTitle + " - Github Viewer";
			}
		};
	};

	var app = angular.module("githubViewer");
	app.factory("page", page);
}());