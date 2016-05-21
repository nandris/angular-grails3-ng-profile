'use strict';

angular.module('main.star')
.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.when('/star/', '/star/list');

	$stateProvider
		.state('star', {
			abstract:true,
			url:'/star',
			template: '<div ui-view></div>'
		})
		.state('star.list', {
			url:'/list',
			controller:'StarListCtrl as ctrl',
			templateUrl:'/main/star/list.html',
            resolve: {
                starList: function($stateParams, StarService) {
                    return StarService.list($stateParams);
                }
            }
		})
		.state('star.create', {
			url:'/create',
			controller:'StarCreateEditCtrl as ctrl',
			templateUrl:'/main/star/create-edit.html',
            resolve: {
				star: function(StarService) {
                	return StarService.create();
            	}
			}
		})
		.state('star.edit', {
			url:'/edit/:id',
			controller:'StarCreateEditCtrl as ctrl',
			templateUrl:'/main/star/create-edit.html',
            resolve: { 
				star: function($stateParams, StarService) {
					return StarService.get($stateParams.id);
            	}
			}
		})
		.state('star.show', {
			url:'/show/:id',
			controller:'StarShowCtrl as ctrl',
			templateUrl:'/main/star/show.html',
            resolve: { 
				star: function($stateParams, StarService) {
					return StarService.get($stateParams.id);
            	}
			}
		});
});
