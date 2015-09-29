/// <reference path='../_app.ts' />

module safemotion {
    export interface IServiceUserScope extends ng.IScope {
        serviceUser: ServiceUser,
        serviceUserList: Array<ServiceUser>

    }
}