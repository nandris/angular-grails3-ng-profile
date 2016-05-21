'use strict';

function HomeCtrl(info) {
    var self = this;
    self.info = info;
}

angular.module('main.home.controllers', [])
	.controller('HomeCtrl', HomeCtrl);