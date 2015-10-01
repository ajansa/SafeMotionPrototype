/// <reference path='../_app.ts' />
module safemotion {
    'use strict';

    export class ServiceUser {
        constructor(
            public id: number,
            public firstName: string,
            public lastName: string,
            public profilePicture: string,
            public batteryLevel: number,
            public lastSignalMin: number,
            public activeAlarms: number,
            public latitude: number,
            public longitude: number
        ) { }
    }
}