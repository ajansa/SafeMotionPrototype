/// <reference path='../_app.ts' />

module safemotion {
    'use strict';

    export class LoginController {

        constructor() {
            var test = "";  // 

            $(window).load(function () { $('#divLoginModal').modal('show'); });
        }

        loginWithFacebook() {
            alert("with facebook");
        }

        loginWithGoogle() {
            alert("with google");
        }

        loginWithEmail(user: string, password: string) {
            alert("with email");

        }
    }
}