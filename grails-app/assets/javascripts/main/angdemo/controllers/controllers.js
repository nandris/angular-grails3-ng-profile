'use strict';

function AngdemoListCtrl($scope, AngdemoService, angdemoList, pageSize) {
    var self = this;
    self.angdemoList = angdemoList;
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

        AngdemoService.list(params).then(function(items) {
            self.angdemoList = items;
        });
    };

    self.reload = function() {
        self.page = 1;
        self.load();
    }
}

function AngdemoShowCtrl(angdemo) {
    var self = this;
    self.angdemo = angdemo;
};

function AngdemoCreateEditCtrl(angdemo) {
    var self = this;
    self.angdemo = angdemo;
}

angular.module('main.angdemo.controllers', [])
    .controller('AngdemoListCtrl', AngdemoListCtrl)
    .controller('AngdemoShowCtrl', AngdemoShowCtrl)
    .controller('AngdemoCreateEditCtrl', AngdemoCreateEditCtrl);
