//= wrapped
//= require /angular/angular
//= require /angular/angular-resource
//= require /main/core/main.core
//= require_self 
//= require routes
//= require_tree /main/star/controllers
//= require_tree /main/star/services 
//= require_tree /main/star/templates/

'use strict';

angular.module('main.star', [
	'main.core',
	'main.star.controllers', 
	'main.star.services'
]);
