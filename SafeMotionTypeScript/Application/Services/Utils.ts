/// <reference path='../_app.ts' />

module safemotion {
    export class Utils {

        // resize the map canvas to the size of the profile picture
        resizeMap() {
            var img = $('#imgProfilePicture');
            $('#divMap').css({ 'width': img.width() + 'px' }).css({ 'height': img.height() + 'px' });

        } 
    }
}
