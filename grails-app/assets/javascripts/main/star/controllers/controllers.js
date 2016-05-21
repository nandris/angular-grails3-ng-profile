'use strict';

function StarListCtrl($scope, StarService, starList, pageSize) {
    var self = this;
    self.starList = starList;
    self.pageSize = pageSize;
    self.page = 1;
    self.filter = {};

    $scope.$watchCollection(function() { return self.filter }, function() {
        self.reload();
    });

    self.load = function() {
        var params = {page: self.page};

        if (self.sort) {
            angular.extend(params, self.sort);
        }
		if (self.filter) {
			params.filter = self.filter
		}

        StarService.list(params).then(function(items) {
            self.starList = items;
        });
    };

    self.reload = function() {
        self.page = 1;
        self.load();
    }
}

function StarShowCtrl(star) {
    var self = this;
    self.star = star;
};

function StarCreateEditCtrl(star) {
    var self = this;
    self.star = star;
}

angular.module('main.star.controllers', [])
    .controller('StarListCtrl', StarListCtrl)
    .controller('StarShowCtrl', StarShowCtrl)
    .controller('StarCreateEditCtrl', StarCreateEditCtrl);
