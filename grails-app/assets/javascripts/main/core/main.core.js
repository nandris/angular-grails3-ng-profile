//= wrapped
//= require /angular/angular
//= require /angular/angular-resource
//= require_self
//= require_tree services
//= require_full_tree /angular/modules
//= require /angular/restangular.min
//= require /angular/underscore.min
//= require /angular/angular-ui-router.min
//= require /angular/malhar-angular-dashboard
//= require directives/module
//= require services/module
//= require filters

'use strict';

angular.module('main.core', [
    'ngResource',
	 'ngAnimate',
    'restangular',
    'ui.router',
    'main.core.directives',
    'main.core.services',
    'main.core.constants'
])
    .constant("contextPath", window.contextPath)
    .config(config);

function config($httpProvider) {
    $httpProvider.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
    $httpProvider.interceptors.push(httpRequestInterceptor);
}

function httpRequestInterceptor(contextPath) {
    return {
        request: function (config) {
            if (!config.url.indexOf("/") == 0 && contextPath) {
                config.url = contextPath + "/" + config.url;
            }
            return config;
        }
    };
}

angular.module('main.core.constants', []);

