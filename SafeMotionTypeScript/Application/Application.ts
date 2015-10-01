/// <reference path='_app.ts' />

/**
 * The main SafeMotionMVC app module.
 *

 * Prototype based on following examples and documentations:
 * TypeScript and AngularJS:
https://github.com/ajansa/todomvc/tree/master/examples/typescript-angular
and
 * http://blog.scottlogic.com/2014/08/26/StrongTypingWithAngularJS.html

http://www.dotnetcurry.com/angularjs/1016/angularjs-typescript-single-page-apps-spa

Interresting: 
https://blorkfish.wordpress.com/2014/02/03/setting-up-typescript-and-angularjs-in-visual-studio-2013/



 * @type {angular.Module}
 */
module safemotion {
    'use strict';

    // app config
    var safemotionApp = angular.module('app', ['ngRoute'])
        .service('storage', MockupStorage)
        .controller('DetailController', DetailController)
        .controller('ListController', ListController)
        // white list images
        .config(function ($compileProvider) {
            var imgSrcSanitizationWhitelist = /^\s*(https?|ftp|file):|data:image\//;
            $compileProvider.imgSrcSanitizationWhitelist(imgSrcSanitizationWhitelist);
        })
        // routes
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: '/Application/Views/List.html',
                    controller: 'ListController'
                })
                .when('/list', {
                    templateUrl: '/Application/Views/List.html',
                    controller: 'ListController'
                })
                .when('/detail:detailId', {
                    templateUrl: '/Application/Views/Detail.html',
                    controller: 'DetailController'
                })
                .otherwise({ redirectTo: '/list' });
        });
}