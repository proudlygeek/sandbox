var app = angular.module("App", []);

app.directive("zippy", function () {
	return {
		restrict: "E",
		scope: {
			title: "@"
		},
		transclude: true,
		template: "<h3 ng-click='toggleContent()'>{{title}}</h3>" + 
				  "<div ng-show='isContentVisible' ng-transclude></div>",
		link: function(scope) {
			scope.isContentVisible = false;
			scope.toggleContent = function() {
				scope.isContentVisible = !scope.isContentVisible;
			};
		}
	};
});