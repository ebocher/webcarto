var map, mapquest, nysdop;


mapquest = new L.TileLayer('http://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
    maxZoom: 18,
    subdomains: ['1', '2', '3', '4'],
    opacity: 1
});

nysdop = new L.TileLayer("http://www.orthos.dhses.ny.gov/ArcGIS/rest/services/2007/MapServer/tile/{z}/{y}/{x}.jpg", {
    maxZoom: 20,
    scheme: "xyz",
    opacity: 0
});

var LeafIcon = L.Icon.extend({
    iconUrl: 'http://labs.google.com/ridefinder/images/mm_20_green.png',
    shadowUrl: 'http://labs.google.com/ridefinder/images/mm_20_shadow.png',
    iconSize: new L.Point(12, 20),
    shadowSize: new L.Point(22, 20),
    iconAnchor: new L.Point(0, 0),
    popupAnchor: new L.Point(0, 0)
});

var greenIcon = new LeafIcon('http://labs.google.com/ridefinder/images/mm_20_green.png'),
    redIcon = new LeafIcon('http://labs.google.com/ridefinder/images/mm_20_red.png'),
    orangeIcon = new LeafIcon('http://labs.google.com/ridefinder/images/mm_20_orange.png');
	


function onLoad() {
    map = new L.Map('map', {
        center: new L.LatLng(47.22,  -1.54427),
        zoom: 12,
		fullscreenControl: true, // add fullscreen control to the map
        layers: [nysdop, mapquest],
				zoomControl : false

    });
	
	//About
	map.attributionControl.setPrefix('<a href="#" id="about" onclick="chargeAbout();">About</a>');
	map.attributionControl.addAttribution('<a href="http://www.irstv.fr/" target="_blank">IRSTV FR CNRS 2488 - Atelier SIG</a>'); 
	
	// detect fullscreen toggling
		map.on('enterFullscreen', function(){
			if(window.console) window.console.log('enterFullscreen');
		});
		map.on('exitFullscreen', function(){
			if(window.console) window.console.log('exitFullscreen');
		});
		
    map.on('zoomend', function (e) {
        $("#zoomslider").slider("value", map.getZoom());
    });
		map.addControl(new L.Control.Scale({ position: 'bottomleft'})); //Scale
		L.control.zoom().addTo(map);
		L.control.locate().addTo(map); //GPS positioning
		L.control.mesure().addTo(map);
		L.control.zoombox().addTo(map);
		var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
		var osmAttrib='Map data &copy; OpenStreetMap contributors';
		var osm = new L.TileLayer(osmUrl, {minZoom: 5, maxZoom: 18, attribution: osmAttrib});
		var osm2 = new L.TileLayer(osmUrl, {minZoom: 0, maxZoom: 13, attribution: osmAttrib});
		var miniMap = new L.Control.MiniMap(osm2, { toggleDisplay: true }).addTo(map); 
}
