'use strict';

angular.module('main.angdemo')
.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.when('/angdemo/', '/angdemo/list');

	$stateProvider
		.state('angdemo', {
			abstract:true,
			url:'/angdemo',
			template: '<div ui-view></div>'
		})
		.state('angdemo.list', {
			url:'/list',
			controller:'AngdemoListCtrl as ctrl',
			templateUrl:'/main/angdemo/list.html',
            resolve: {
                angdemoList: function($stateParams, AngdemoService) {
                    return AngdemoService.list($stateParams);
                }
            }
		})
});
