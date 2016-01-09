"use strict";

angular.module('topNavigationDirective', [])
.controller('topNavigationCtrl', function($scope){
	$scope.isCollapsed = false;
})
.directive('topNavigation', function(){
	return {
		restrict: 'E',
		replace: true,
		templateUrl: '/ng/shared/topNavigation/topNavigationDirective.html'
	}
});