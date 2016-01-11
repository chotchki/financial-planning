"use strict";

angular.module('inflationSettingDirective', ['inflationService'])
.controller('inflationSettingCtrl', ['$scope', 'inflationSrv', function($scope, inflationSrv){
	$scope.rate = inflationSrv.get();
	$scope.$watch('rate', function(newValue, oldValue){
		var _i = inflationSrv;
		_i.set(newValue);
	}, true);
}])
.directive('inflationSetting', function(){
	return {
		restrict: 'E',
		replace: true,
		templateUrl: '/ng/shared/inflationSetting/inflationSettingDirective.html'
	}
});