(function () {
    'use strict';

    window.venereApp.service('Autocomplete', function ($http) {
        var endpoint = "http://cors.io/www.venere.com/passthru/ajax/autocomplete_suggestion_loader.php";
        return {
            /**
             * Returns a promise.
             */
            getData: function(q) {
                var promise = $http.get(endpoint, {
                        params: { name: q, lg: 'en' },
                        cache: true
                    })
                    .success(function(data, status, headers, config) {
                        return data;
                    })
                    .error(function(data, status, headers, config) {
                        return {status: false};
                    });

                return promise;
            }
        };
    });
})(window);
