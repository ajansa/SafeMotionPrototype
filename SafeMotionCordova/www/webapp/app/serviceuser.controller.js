﻿(function () {
    'use strict';

    angular
        .module('app')
        .controller('ServiceUser', serviceuser);

    function serviceuser() {

        // for pictures a fully qualified URL has to be used
        var baseurl = "http://localhost:62682/";        

        var vm = this;
        vm.firstName = "MyFirstName";
        vm.lastName = "MyLastName";
        vm.profilePicture = baseurl + "images/serviceuser.png";
        vm.batteryLevel = 50;
        vm.lastSignalMin = 1;
        vm.activeAlarms = 1;
        vm.latitude = 51.480401;
        vm.longitude = -0.110252;
        vm.watchPicture = baseurl + "images/watchmodel.jpg";

        // initialise map after profile picture is loaded
        $('#imgProfilePicture').load(function () {

            // resize according to profile picture size. "this" is this profile picture with id "imgProfilePicure"
            $('#divMap').css({ 'width': this.width + 'px' }).css({ 'height': this.height + 'px' });

            // initialise google maps with lat and long
            google.maps.event.addDomListener(window, 'load', initialiseMaps(vm.latitude, vm.longitude));
        });

    }

})();
