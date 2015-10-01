/// <reference path='../_app.ts' />

module safemotion {
    export class MockupStorage {

        list(): Array<ServiceUser> {
            var i: number = 0;

            var list = new Array<ServiceUser>();
            list.push(new ServiceUser("FirstName" + ++i, "LastName" + i, "Images/serviceuser.png", 20 * i, 5 * i, i, 51.480401, -0.110252));
            list.push(new ServiceUser("FirstName" + ++i, "LastName" + i, "Images/serviceuser.png", 20 * i, 5 * i, i, 51.480401 + i / 20, -0.110252 - i / 20));
            list.push(new ServiceUser("FirstName" + ++i, "LastName" + i, "Images/serviceuser.png", 20 * i, 5 * i, i, 51.480401 - i / 20, -0.110252 + i / 20));
            list.push(new ServiceUser("FirstName" + ++i, "LastName" + i, "Images/serviceuser.png", 20 * i, 5 * i, i, 51.480401 + i / 20, -0.110252 + i / 20));
            return list; 
        }
    }
}
