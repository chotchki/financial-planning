"use strict";

var persistenceService = angular.module('persistenceService', []);

/**
 * The persistence service acts as a key value store that currently
 * saves all data to local storage, long term may be replaced with
 * a remote storage.
 */
persistenceService.factory('persistService', [function(){
	var persistService = {};

	persistService.get = function(key){
		return localStorage.getItem(key);
	};

	persistService.set = function(key, value){
		localStorage.setItem(key, value);
	};

	persistService.remove = function(key){
		localStorage.removeItem(key);
	}

	return persistService;
}]);

