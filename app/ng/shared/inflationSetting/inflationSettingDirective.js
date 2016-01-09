"use strict";

angular.module('inflationSettingDirective', ['persistenceService'])
.controller('inflationSettingCtrl', ['$scope', 'persistService', function($scope, persistService){
	var currentRate = persistService.get('inflation');
	if (currentRate == null) {
		currentRate = 2;
	}
	$scope.rate = currentRate;
	$scope.$watch('rate', function(newValue, oldValue){
		var _p = persistService;
		_p.set('inflation', newValue);
	}, true);
}])
.directive('inflationSetting', function(){
	return {
		restrict: 'E',
		replace: true,
		templateUrl: '/ng/shared/inflationSetting/inflationSettingDirective.html'
	}
});