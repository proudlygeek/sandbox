var app = angular.module("app", []);

app.directive("dumbPassword", function() {
	return {
		restrict: "E",
		template: '<div><input type="text" ng-model="model.input"><div>{{ model.input }}</div></div>',
		replace: true,
		link: function (scope, element) {
			scope.$watch('model.input', function(value) {
				if (value ==="password") {
					console.log(element.children(10));
					element.children(1).toggleClass("alert-box alert");
				}
			});
		}
	};
});