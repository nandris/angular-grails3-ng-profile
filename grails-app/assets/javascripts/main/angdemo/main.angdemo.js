//= wrapped
//= require /angular/angular
//= require /angular/angular-resource
//= require /main/core/main.core
//= require_self 
//= require routes
//= require_tree /main/angdemo/controllers
//= require_tree /main/angdemo/services 
//= require_tree /main/angdemo/templates/

'use strict';

angular.module('main.angdemo', [
	'main.core',
	'main.angdemo.controllers', 
	'main.angdemo.services'
]);
