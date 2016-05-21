//= wrapped
//= require /angular/angular
//= require /main/star/main.star
//= require /main/core/main.core
//= require /main/home/main.home
//= require /main/index/main.index
//= require /main/angdemo/main.angdemo

angular.module("main", [
    "main.core",
    "main.star",
    "main.home",
    "main.index",
    "main.angdemo"
]);
