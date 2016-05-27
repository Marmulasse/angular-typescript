module app.domain {
    import IHttpService = angular.IHttpService;
    import IPromise = angular.IPromise;
    import Phone = app.domain.phone.Phone;

    /* Services */
    export interface IPhoneService {
        getAll():IPromise<Phone[]>;
        getPhone(phoneId:String):IPromise<Phone>;
    }

    class PhoneService implements IPhoneService {
        private http:IHttpService;

        constructor($http:IHttpService) {
            this.http = $http;
        }

        getAll():IPromise<Array<Phone>> {
            return this.http.get('phones/phones.json', {}).then((result) => result.data);
        }

        getPhone(phoneId:String):IPromise<Phone> {
            return this.http.get('phones/' + phoneId + '.json').then((result) => result.data);
        }
    }

    angular.module('phonecatServices', ['ngResource'])
        .service('Phone', ['$http', PhoneService]);
}