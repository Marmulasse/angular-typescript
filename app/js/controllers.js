'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['Phone',
	function(Phone) {
		var vm = this;
		vm.orderProp = 'age';
		vm.phones = [];
		Phone.getAll().then(function (result) {
			vm.phones = result;
		});
	}]);

phonecatControllers.controller('PhoneDetailCtrl', ['$routeParams', 'Phone',
	function($routeParams, Phone) {
		var vm = this;
		vm.phone = {};
		Phone.getPhone($routeParams.phoneId).then(function (result) {
			vm.phone = result;
			vm.mainImageUrl = result.images[0];
		});

		vm.setImage = function(imageUrl) {
			vm.mainImageUrl = imageUrl;
		};
	}]);
