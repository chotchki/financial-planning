"use strict";
var inflationService = angular.module('inflationService', ['persistenceService']);

/**
 * Inflation is modelled and stored as a single percentage.
 */
inflationService.factory('inflationSrv', ['persistenceSrv', function(persistenceSrv){
	var iS = {};

	iS._p = persistenceSrv;

	iS.storageKey = 'inflationSrv';
	iS.defaultValue = 0.03;
	iS.currentValue = iS._p.get(iS.storageKey, iS.defaultValue);

	iS.get = function(){
		return this.currentValue;
	};

	iS.set = function(value){
		this.currentValue = value;
		this._p.set(this.storageKey, value);
	};

	return iS;
}]);

