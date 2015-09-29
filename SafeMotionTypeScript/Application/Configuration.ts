/// <reference path='_app.ts' />

module safemotion {

    export class Configuration {
        constructor($routeProvider: ng.route.IRouteProvider) {
            $routeProvider.when("/list", {
                templateUrl: "Application/Views/List.html",
                controller: "ListController"
            })
            .when("/detail", {
                templateUrl: "Application/Views/Detail.html",
                controller: "DetailController"
            })
            .otherwise({
                redirectTo: '/list'
            });
        }
    }
    Configuration.$inject = ['$routeProvider'];
    // safeMotionApp.config(Configuration);
}
