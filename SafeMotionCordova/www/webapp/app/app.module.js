(function () {
    'use strict';

    var app = angular.module('app', []);

    app.config(function ($compileProvider) {
        var imgSrcSanitizationWhitelist = /^\s*(https?|ftp|file):|data:image\//;
        $compileProvider.imgSrcSanitizationWhitelist(imgSrcSanitizationWhitelist);
    });

})();
