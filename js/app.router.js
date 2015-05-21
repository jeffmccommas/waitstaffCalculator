/**
 * Created by jmccommas on 5/21/15.
 */
(function () {
    "use strict";
    angular.module('app').config(['$stateProvider', '$urlRouterProvider','localStorageServiceProvider', function($stateProvider,$urlRouterProvider,localStorageServiceProvider ){

        $urlRouterProvider.otherwise("/home");
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: 'views/home.html'
            })
            .state('meals', {
                url: "/meals",
                templateUrl: 'views/meals.html'
            })
            .state('earnings', {
                url: "/earnings",
                templateUrl: 'views/earnings.html'
            });

        localStorageServiceProvider
            .setStorageCookie(45, 'waitstaffCalculator');

     }]);

}());

