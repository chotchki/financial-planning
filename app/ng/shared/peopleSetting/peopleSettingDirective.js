"use strict";

angular.module('peopleSettingDirective', ['peopleService'])
.controller('peopleSettingCtrl', ['$scope', 'peopleSrv', function($scope, peopleSrv){
	$scope.people = peopleSrv.get();
	$scope.$watch('people', function(newValue, oldValue){
		var _p = peopleSrv;
		_p.set(newValue);
	}, true);
}])
.directive('peopleSetting', function(){
	return {
		restrict: 'E',
		replace: true,
		templateUrl: '/ng/shared/inflationSetting/inflationSettingDirective.html'
	}
});
