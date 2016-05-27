///<reference path="../../typings/index.d.ts"/>
import IRoute = angular.route.IRoute;
import IRouteProvider = angular.route.IRouteProvider;

const phoneListRoute:IRoute = {
  templateUrl : 'partials/phone-list.html',
  controller: 'PhoneListCtrl',
  controllerAs: 'vm'
};
const phoneListDetailRoute:IRoute = {
  templateUrl: 'partials/phone-detail.html',
  controller: 'PhoneDetailCtrl',
  controllerAs: 'vm'
};
const defaultRoute:IRoute = {
  redirectTo: '/phones'
};

class RouteConfig {
  routeProvider:IRouteProvider;

  static $inject = ['$routeProvider'];
  constructor($routeProvider:IRouteProvider){
    this.routeProvider = $routeProvider;
    this.routeProvider.when('/phones', phoneListRoute);
    this.routeProvider.when('/phones/:phoneId', phoneListDetailRoute);
    this.routeProvider.otherwise(defaultRoute);
  }
}

angular.module('phonecatApp',
['ngRoute', 'phonecatAnimations',

'phonecatControllers',
'phonecatFilters',
'phonecatServices']).config(RouteConfig);
