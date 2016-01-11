"use strict";

angular.module('lifeExpectancySettingDirective', ['lifeExpectancyService'])
.controller('lifeExpectancySettingCtrl', ['$scope', 'lifeExpectancySrv', function($scope, lifeExpectancySrv){
	$scope.age = lifeExpectancySrv.get();
	$scope.$watch('age', function(newValue, oldValue){
		var _l = lifeExpectancySrv;
		_l.set(newValue);
	}, true);
}])
.directive('lifeExpectancySetting', function(){
	return {
		restrict: 'E',
		replace: true,
		templateUrl: '/ng/shared/lifeExpectancySetting/lifeExpectancySettingDirective.html'
	}
});