
// Init Google Maps Canvas
function initialiseMaps(lat, long) {

    var mapCanvas = document.getElementById('divMap');
    var myLatLng = new google.maps.LatLng(lat, long);

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

    // resize map when window is resized
    if (window.attachEvent) {
        window.attachEvent('onresize', function () {
            resizeMap();
        });
    } else if (window.addEventListener) {
        window.addEventListener('resize', function () {
            resizeMap();
        }, true);
    } else {
        // The browser does not support Javascript event binding, set fixed size 
        $('#divMap').css({ 'width': '300px' }).css({ 'height': '300px' });
    }


}


// resize the map canvas to the size of the profile picture
function resizeMap() {
    var img = $('#imgProfilePicture');
    $('#divMap').css({ 'width': img.width() + 'px' }).css({ 'height': img.height() + 'px' });

} 
