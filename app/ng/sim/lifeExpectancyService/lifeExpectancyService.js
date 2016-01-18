"use strict";

var lifeExpectancyService = angular.module('lifeExpectancyService', ['persistenceService']);

lifeExpectancyService.factory('lifeExpectancySrv', ['persistenceSrv', function(persistenceSrv){
	var lS = {};

	lS._p = persistenceSrv;

	lS.storageKey = 'lifeExpectancySrv';
	lS.defaultValue = 90;
	lS.currentValue = lS._p.get(lS.storageKey, lS.defaultValue);

	lS.get = function(){
		return this.currentValue;
	};

	lS.set = function(value){
		this.currentValue = value;
		this._p.set(this.storageKey, value);
	};

	return lS;
}]);