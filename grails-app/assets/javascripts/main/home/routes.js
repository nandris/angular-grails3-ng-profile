'use strict';

angular.module('main.home')
.config(function($stateProvider) {
	$stateProvider
		.state('home', {
			url:'',
			templateUrl:'/main/home/index.html',
			controller: 'HomeCtrl as ctrl',
			resolve: {
				info: function(HomeService) {
					return HomeService.getInfo();
				}
			}
		});
});