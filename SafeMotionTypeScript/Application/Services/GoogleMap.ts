/// <reference path='../_app.ts' />

module safemotion {
    export class GoogleMap {

        private _mapDiv: Element;
        private _map: any;
        private _options: any;
        private _lat: number;
        private _long: number; 

        constructor(mapDiv: Element, lat: number, long: number, zoomLevel: number) {
            this._mapDiv = mapDiv;
            this._lat = lat;
            this._long = long;

            var latLng = new google.maps.LatLng(lat, long);
            this._options = { center: latLng, zoom: zoomLevel };
            this._map = new google.maps.Map(mapDiv, this._options);

        }

        setMarker(title: string, lat: number, long: number) {

            var latLng = new google.maps.LatLng(lat, long);

            var marker = new google.maps.Marker({
                position: latLng,
                map: this._map,
                title: title
            });

        }

        setCenter(lat: number, long: number) {
            this._map.setCenter(new google.maps.LatLng(lat, long));
        }

        setZoom(zoom: number) {
            this._map.setZoom(zoom);
        }

        setMapType(mapType: google.maps.MapTypeId) {
            this._map.setMapTypeId(mapType);
        }
    }
}