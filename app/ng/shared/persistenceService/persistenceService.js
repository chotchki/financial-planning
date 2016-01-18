"use strict";

var persistenceService = angular.module('persistenceService', []);

/**
 * The persistence service acts as a key value store that currently
 * saves all data to local storage, long term may be replaced with
 * a remote storage.
 *
 * All data is treated as JSON and serialized/deserialized when 
 * saving/restoring.
 */
persistenceService.factory('persistenceSrv', [function(){
	var pS = {};

	if(localStorage == undefined){
		pS.mock = true;
	} else {
		pS.storage = localStorage;
	}

	pS.get = function(key, defaultVal){
		if(this.mock == true){
			return defaultVal;
		}

		var val = this.storage.getItem(key);

		if(val == null){
			this.set(defaultVal);
			return defaultVal;
		}

		return JSON.parse(val);
	};

	pS.set = function(key, value){
		if(this.mock == true){
			return;
		}

		var serialVal = JSON.stringify(value);
		this.storage.setItem(key, serialVal);
	};

	pS.remove = function(key){
		if(this.mock == true){
			return;
		}

		this.storage.removeItem(key);
	}

	return pS;
}]);

