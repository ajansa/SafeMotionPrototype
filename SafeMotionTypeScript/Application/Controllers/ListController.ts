/// <reference path='../_app.ts' />

module safemotion {
    'use strict';

    export class ListController {

        public static $inject = [
            '$scope',
            'storage'
        ];

        constructor(private $scope: IServiceUserScope, private storage: MockupStorage) {
            $scope.serviceUserList = storage.list();
        }
    }
}