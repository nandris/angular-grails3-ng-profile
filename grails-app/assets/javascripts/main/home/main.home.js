//= wrapped
//= require /angular/angular
//= require /angular/angular-resource
//= require /main/core/main.core
//= require_self 
//= require routes
//= require_tree /main/home/services
//= require_tree /main/home/controllers
//= require_tree /main/home/templates/

'use strict';

angular.module('main.home', [
	'main.home.services',
	'main.home.controllers'
]);
