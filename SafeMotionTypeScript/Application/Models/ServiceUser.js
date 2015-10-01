/// <reference path='../_all.ts' />
var serviceuser;
(function (serviceuser) {
    'use strict';
    var ServiceUser = (function () {
        function ServiceUser(firstName, lastName, profilePicture, batteryLevel, lastSignalMin, activeAlarms, latitude, longitude) {
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
    serviceuser.ServiceUser = ServiceUser;
})(serviceuser || (serviceuser = {}));
