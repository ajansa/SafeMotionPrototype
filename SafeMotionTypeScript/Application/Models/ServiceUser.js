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
//# sourceMappingURL=ServiceUser.js.map