"use strict";

var financialPlanning = angular.module('financialPlanning', [
	'ui.router',
	'inflationSettingDirective',
	'lifeExpectancySettingDirective',
	'topNavigationDirective']);

financialPlanning.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/income");

	$stateProvider.state('income', {
		url: "/income",
		templateUrl: "/ng/components/incomePage/incomePage.html"
	})
	.state('assets', {
		url: "/assets",
		templateUrl: "/ng/components/assetsPage/assetsPage.html"
	})
	.state('debts', {
		url: "/debts",
		templateUrl: "/ng/components/debtsPage/debtsPage.html"
	})
	.state('timeline', {
		url: "/timeline",
		templateUrl: "/ng/components/timelinePage/timelinePage.html"
	})
	.state('settings', {
		url: "/settings",
		templateUrl: "/ng/components/settingsPage/settingsPage.html"
	});
});

angular.element(document).ready(function(){
	angular.bootstrap(document, ['financialPlanning']);
});