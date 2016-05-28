'use strict';
import Phone = app.domain.phone.Phone;
import IPhoneService = app.domain.IPhoneService;

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

class PhoneListCtrl {
    private phones:Array<Phone>;

    constructor(phones:IPhoneService){
        phones.getAll().then((result:Phone[]) => this.phones = result);
    }

    public getAll():Phone[]{
        return this.phones;
    }

    public static getOrderProp():String {
        return 'age';
    }
}

phonecatControllers.controller('PhoneListCtrl', ['Phone', PhoneListCtrl]);

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
