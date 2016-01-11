"use strict";

var persistenceService = angular.module('persistenceService', []);

/**
 * The persistence service acts as a key value store that currently
 * saves all data to local storage, long term may be replaced with
 * a remote storage.
 */
persistenceService.factory('persistenceSrv', [function(){
	var persistenceSrv = {};

	persistenceSrv.get = function(key, defaultVal){
		var val = localStorage.getItem(key);
		if(val == null){
			this.set(defaultVal);
			return defaultVal;
		}
		return val;
	};

	persistenceSrv.set = function(key, value){
		localStorage.setItem(key, value);
	};

	persistenceSrv.remove = function(key){
		localStorage.removeItem(key);
	}

	return persistenceSrv;
}]);

