/// <reference path='../_app.ts' />
var safemotion;
(function (safemotion) {
    var MockupStorage = (function () {
        function MockupStorage() {
        }
        MockupStorage.prototype.list = function () {
            var i = 0;
            var list = new Array();
            list.push(new safemotion.ServiceUser(0, "FirstName" + ++i, "LastName" + i, "Images/serviceuser.png", 20 * i, 5 * i, i, 51.480401, -0.110252));
            list.push(new safemotion.ServiceUser(1, "FirstName" + ++i, "LastName" + i, "Images/serviceuser.png", 20 * i, 5 * i, i, 51.480401 + i / 20, -0.110252 - i / 20));
            list.push(new safemotion.ServiceUser(2, "FirstName" + ++i, "LastName" + i, "Images/serviceuser.png", 20 * i, 5 * i, i, 51.480401 - i / 20, -0.110252 + i / 20));
            list.push(new safemotion.ServiceUser(3, "FirstName" + ++i, "LastName" + i, "Images/serviceuser.png", 20 * i, 5 * i, i, 51.480401 + i / 20, -0.110252 + i / 20));
            return list;
        };
        return MockupStorage;
    })();
    safemotion.MockupStorage = MockupStorage;
})(safemotion || (safemotion = {}));
/// <reference path='../_app.ts' />
var safemotion;
(function (safemotion) {
    'use strict';
    // global variable to be able to reset map centre after resize of browser window
    var serviceUserMap;
    /**
     * Controller for Service User Detail View
     */
    var DetailController = (function () {
        // dependencies are injected via AngularJS $injector
        // controller's name is registered in Application.ts and specified from ng-controller attribute in index.html
        function DetailController($scope, $routeParams, storage) {
            this.$scope = $scope;
            this.storage = storage;
            $scope.serviceUserList = storage.list();
            var id = +$routeParams.detailId.replace(":", "");
            $scope.serviceUser = storage.list()[id];
            var currentServiceUser = $scope.serviceUser;
            // initialise map after profile picture is loaded
            $('#imgProfilePicture').load(function () {
                // resize according to profile picture size. "this" is this profile picture with id "imgProfilePicure"
                $('#divMap').css({ 'width': this.width + 'px' }).css({ 'height': this.height + 'px' });
                var lat = $scope.serviceUser.latitude;
                var long = $scope.serviceUser.longitude;
                // register map div and map in global variable for later usage
                serviceUserMap = new safemotion.GoogleMap($('#divMap').get(0), lat, long, 14);
                serviceUserMap.setMarker("Location of Service User: " + currentServiceUser.firstName + " " + currentServiceUser.lastName, lat, long);
                // resize Map in case window gets resized
                if (window.addEventListener) {
                    window.addEventListener('resize', function () {
                        if (serviceUserMap) {
                            serviceUserMap.setCenter(lat, long);
                            new safemotion.Utils().resizeMap();
                        }
                    }, true);
                }
                else {
                    // if the browser does not support Javascript event binding, set fixed size 
                    $('#divMap').css({ 'width': '300px' }).css({ 'height': '300px' });
                }
            });
        }
        // $inject annotation.
        // It provides $injector with information about dependencies to be injected into constructor
        // it is better to have it close to the constructor, because the parameters must match in count and type.
        // See http://docs.angularjs.org/guide/di
        DetailController.$inject = [
            '$scope',
            '$routeParams',
            'storage'
        ];
        return DetailController;
    })();
    safemotion.DetailController = DetailController;
})(safemotion || (safemotion = {}));
/// <reference path='../_app.ts' />
var safemotion;
(function (safemotion) {
    'use strict';
    var ListController = (function () {
        function ListController($scope, storage) {
            this.$scope = $scope;
            this.storage = storage;
            $scope.serviceUserList = storage.list();
        }
        ListController.$inject = [
            '$scope',
            'storage'
        ];
        return ListController;
    })();
    safemotion.ListController = ListController;
})(safemotion || (safemotion = {}));
/// <reference path='../_app.ts' />
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
var safemotion;
(function (safemotion) {
    'use strict';
    // app config
    var safemotionApp = angular.module('app', ['ngRoute'])
        .service('storage', safemotion.MockupStorage)
        .controller('DetailController', safemotion.DetailController)
        .controller('ListController', safemotion.ListController)
        .config(function ($compileProvider) {
        var imgSrcSanitizationWhitelist = /^\s*(https?|ftp|file):|data:image\//;
        $compileProvider.imgSrcSanitizationWhitelist(imgSrcSanitizationWhitelist);
    })
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
})(safemotion || (safemotion = {}));
/// <reference path='../scripts/typings/jquery/jquery.d.ts' />
/// <reference path='../scripts/typings/angularjs/angular.d.ts' />
/// <reference path='../typings/google.maps.d.ts' />
/// <reference path='./Models/ServiceUser.ts' />
/// <reference path="./Services/MockupStorage.ts" />
/// <reference path='./Controllers/DetailController.ts' />
/// <reference path='./Controllers/ListController.ts' />
/// <reference path='./Interfaces/IServiceUserScope.ts' />
/// <reference path='./Application.ts' />
/// <reference path='../_app.ts' />
var safemotion;
(function (safemotion) {
    'use strict';
    var ServiceUser = (function () {
        function ServiceUser(id, firstName, lastName, profilePicture, batteryLevel, lastSignalMin, activeAlarms, latitude, longitude) {
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.profilePicture = profilePicture;
            this.batteryLevel = batteryLevel;
            this.lastSignalMin = lastSignalMin;
            this.activeAlarms = activeAlarms;
            this.latitude = latitude;
            this.longitude = longitude;
        }
        return ServiceUser;
    })();
    safemotion.ServiceUser = ServiceUser;
})(safemotion || (safemotion = {}));
/// <reference path='../_app.ts' />
var safemotion;
(function (safemotion) {
    var GoogleMap = (function () {
        function GoogleMap(mapDiv, lat, long, zoomLevel) {
            this._mapDiv = mapDiv;
            this._lat = lat;
            this._long = long;
            var latLng = new google.maps.LatLng(lat, long);
            this._options = { center: latLng, zoom: zoomLevel };
            this._map = new google.maps.Map(mapDiv, this._options);
        }
        GoogleMap.prototype.setMarker = function (title, lat, long) {
            var latLng = new google.maps.LatLng(lat, long);
            var marker = new google.maps.Marker({
                position: latLng,
                map: this._map,
                title: title
            });
        };
        GoogleMap.prototype.setCenter = function (lat, long) {
            this._map.setCenter(new google.maps.LatLng(lat, long));
        };
        GoogleMap.prototype.setZoom = function (zoom) {
            this._map.setZoom(zoom);
        };
        GoogleMap.prototype.setMapType = function (mapType) {
            this._map.setMapTypeId(mapType);
        };
        return GoogleMap;
    })();
    safemotion.GoogleMap = GoogleMap;
})(safemotion || (safemotion = {}));
/// <reference path='../_app.ts' />
var safemotion;
(function (safemotion) {
    var Utils = (function () {
        function Utils() {
        }
        // Init Google Maps Canvas
        Utils.prototype.initialiseMaps = function (lat, long) {
            var mapCanvas = document.getElementById('divMap');
            var myLatLng = new google.maps.LatLng(lat, long);
            var mapOptions = {
                center: myLatLng,
                zoom: 14
            };
            var map = new google.maps.Map(mapCanvas, mapOptions);
            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: 'Service User Location'
            });
            if (window.addEventListener) {
                window.addEventListener('resize', function () {
                    this.resizeMap();
                }, true);
            }
            else {
                // The browser does not support Javascript event binding, set fixed size 
                $('#divMap').css({ 'width': '300px' }).css({ 'height': '300px' });
            }
        };
        // resize the map canvas to the size of the profile picture
        Utils.prototype.resizeMap = function () {
            var img = $('#imgProfilePicture');
            $('#divMap').css({ 'width': img.width() + 'px' }).css({ 'height': img.height() + 'px' });
        };
        return Utils;
    })();
    safemotion.Utils = Utils;
})(safemotion || (safemotion = {}));
//# sourceMappingURL=app.js.map