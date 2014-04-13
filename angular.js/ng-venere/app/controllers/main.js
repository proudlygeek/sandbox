(function () {
    'use strict';

    window.venereApp.controller('MainCtrl', function ($scope, Autocomplete) {
        $scope.$watch('search_query', function(q) {
            if (!q) {
                $scope.properties = {};
                return;
            }

            Autocomplete.getData(q).then(function(promise) {
                $scope.data = promise;
                if (promise.data) {
                    $scope.properties = promise.data.ResultSet.Result;
                }
            });
        });

        $scope.notEmpty = function() {
            return ($scope.properties.length > 0);
        };

    });

})(window);
