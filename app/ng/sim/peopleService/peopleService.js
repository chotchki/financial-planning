"use strict";

var peopleService = angular.module('peopleService', ['persistenceService']);

peopleService.factory('peopleSrv', ['persistenceSrv', function(persistenceSrv){
	var pS = {};

	pS._p = persistenceSrv;

	pS.storageKey = 'peopleSrv';
	pS.defaultValue = {};
	pS.currentValue = pS._p.get(pS.storageKey, pS.defaultValue);

	pS.get = function(){
		return this.currentValue;
	};

	pS.set = function(value){
		this.currentValue = value;
		this._p.set(this.storageKey, value);
	};

	return lS;
}]);
