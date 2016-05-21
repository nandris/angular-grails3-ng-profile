'use strict';

function StarService(CrudServiceFactory) {
    return CrudServiceFactory('/api/star');
}

angular.module('main.star.services', [])
    .factory('StarService', StarService);
