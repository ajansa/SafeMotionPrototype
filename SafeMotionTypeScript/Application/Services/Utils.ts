/// <reference path='../_app.ts' />

module safemotion {
    export class Utils {

        // Init Google Maps Canvas
        initialiseMaps(lat: number, long: number) {

            var mapCanvas = document.getElementById('divMap');
            var myLatLng =  new google.maps.LatLng(lat, long);

            var mapOptions = {
                center: myLatLng,
                zoom: 14
            }
            var map = new google.maps.Map(mapCanvas, mapOptions);

            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: 'Service User Location'
            });

            if (window.addEventListener) {
                window.addEventListener('resize', function () {
                     this.resizeMap();
                }, true);
            } else {
                // The browser does not support Javascript event binding, set fixed size 
                $('#divMap').css({ 'width': '300px' }).css({ 'height': '300px' });
            }


        }

        // resize the map canvas to the size of the profile picture
        resizeMap() {
            var img = $('#imgProfilePicture');
            $('#divMap').css({ 'width': img.width() + 'px' }).css({ 'height': img.height() + 'px' });

        } 
    }
}
