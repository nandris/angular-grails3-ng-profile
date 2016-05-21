'use strict';

function HomeService(rootUrl, $q, $http) {
	var homeService = {};
	homeService.getInfo = function() {
        var deferred = $q.defer();

        $http.get(rootUrl + "home/info").success(function(info) {
            deferred.resolve(info);
        });
		
		return deferred.promise; 
	}
	
	return homeService;
}

angular.module('main.home.services', [])
    .service('HomeService', HomeService);