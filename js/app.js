/**
 * Created by jmccommas on 4/7/15.
 */
(function () {
    "use strict";
    var app = angular.module('app', [
        'ui.router',
        'ngAnimate',
        'ngMessages',
        'LocalStorageModule'
    ])
        .controller('mainController', [ '$scope', '$state',  function($scope, $state){
            var mainCtrl = this;

            mainCtrl.mealCount = 0;

            mainCtrl.submit = function(){
                var tax = (mainCtrl.mealPrice * mainCtrl.taxRate) / 100;
                mainCtrl.subTotal = mainCtrl.mealPrice + tax;
                mainCtrl.tip = (mainCtrl.mealPrice * mainCtrl.tipPercent) / 100;
                mainCtrl.total = mainCtrl.subTotal + mainCtrl.tip;

                mainCtrl.tipTotal = mainCtrl.tip;
                mainCtrl.mealCount = mainCtrl.mealCount + 1;
                mainCtrl.average = mainCtrl.tipTotal / mainCtrl.mealCount;

               $state.go('meals')

            };
            mainCtrl.cancel = function(){
                mainCtrl.mealPrice = null;
                mainCtrl.taxRate = null;
                mainCtrl.tipPercent = null;
            };
            mainCtrl.reset = function(){
                mainCtrl.mealPrice = null;
                mainCtrl.taxRate = null;
                mainCtrl.tipPercent = null;

                mainCtrl.subTotal = null;
                mainCtrl.tip = null;
                mainCtrl.total = null;

                mainCtrl.tipTotal = null;
                mainCtrl.mealCount = null;
                mainCtrl.average = null;
            };

        }])
}());
