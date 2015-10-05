/// <reference path='../_app.ts' />
var safemotion;
(function (safemotion) {
    var Utils = (function () {
        function Utils() {
        }
        // resize the map canvas to the size of the profile picture
        Utils.prototype.resizeMap = function () {
            var img = $('#imgProfilePicture');
            $('#divMap').css({ 'width': img.width() + 'px' }).css({ 'height': img.height() + 'px' });
        };
        return Utils;
    })();
    safemotion.Utils = Utils;
})(safemotion || (safemotion = {}));
//# sourceMappingURL=Utils.js.map