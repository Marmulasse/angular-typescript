'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$http',
    function($http){
        var service = this;

        service.getAll = function () {
            return $http.get('phones/phones.json', {});
        };
        service.getPhone = function (phoneId) {
            return $http.get('phones/' + phoneId + '.json');
        };

        return service;
    }]);
