var myApp = angular.module('avengers', []);

myApp.factory('Avengers', function() {
	var Avengers = {};

	Avengers.cast = [
		{ 'name': "Aobert Downey Jr.", 'character': "Tony Stark / Iron Man" },
		{ 'name': "Cobert Downey Jr.", 'character': "Tony Stark / Iron Man" },
		{ 'name': "Jobert Downey Jr.", 'character': "Tony Stark / Iron Man" },
		{ 'name': "Robert Downey Jr.", 'character': "Tony Stark / Iron Man" },
		{ 'name' : "Tina Benko", 'character': "NASA Scientist" }
	];

	return Avengers;
});

myApp.controller('AvengersCtrl', function($scope, Avengers) {
	$scope.avengers = Avengers;
});