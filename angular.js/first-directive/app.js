var app = angular.module('twitterApp', []);

app.controller("AppCtrl", function($scope) {
	$scope.loadMoreTweets = function() {
		alert('Loading tweets!');
	}

	$scope.deleteTweets = function() {
		alert('Deleting tweets!');
	}
});

app.directive("enter", function() {
	return function(scope, element, attrs) {
		element.bind("mouseover", function() {
			scope.$apply(attrs.enter);
		});
	};
});