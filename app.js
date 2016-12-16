'use strict';

var myApp = angular.module('myApp',['ui.router']);

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
$urlRouterProvider.otherwise("/page1")

	$stateProvider
	.state('page1', {
		url: "/page1",
		templateUrl: "page1.html"
	})
	.state('page2', {
		url: "/page2",
		templateUrl: "page2.html"
	})

}]);
