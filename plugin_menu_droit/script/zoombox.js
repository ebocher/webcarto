//Function that focus the map on the rectangle. The corners of this rectangle (diagonally opposite) are startLatLng and latlng 

function modifBBox(startLatLng, latlng){ 
	//Creation of the variables latmin latmax lngmin lngmax 
	var latmin = Math.min(startLatLng.lat, latlng.lat),
	latmax = Math.max(startLatLng.lat, latlng.lat) ,
	lngmin = Math.min(startLatLng.lng, latlng.lng) ,
	lngmax = Math.max(startLatLng.lng, latlng.lng) ;

	//Creation of points to dgefine the BoundingBox. Then creation of the BBox 
	var southWest = new L.LatLng(latmin, lngmin),
		northEast = new L.LatLng(latmax, lngmax),
		BBox = new L.LatLngBounds(southWest, northEast);

	//Cropping the map
	map.fitBounds(BBox);
}



L.Control.ZoomBox = L.Control.extend({
    options: {
        position: 'topright',
        follow: true, // follow with zoom and pan the user's location
    },
	onAdd: function (map) {
	var self = this;
	var className = 'leaflet-control-zoombox',
		classNames = className + ' leaflet-bar leaflet-control',
		container = L.DomUtil.create('div', classNames);

	var classNameLink = 'leaflet-bar-part';
	var link = L.DomUtil.create('a', classNameLink, container);
	link.href = '#';
	link.title = 'Zoom sur la sélection';
	link.id = 'tool_zoom';

	L.DomEvent
		.on(link, 'click', L.DomEvent.stopPropagation)
		.on(link, 'click', L.DomEvent.preventDefault)
		.on(link, 'click', function() {
		if (self._container.className==(classNames+' active')) {
			map.removeEventListener('click') ; //removing the EventListener click
			map.removeEventListener('mousemove') ; //removing the EventListener mousemove
			map._container.style.cursor = '';
			self._container.className = classNames;
		} else {
		self._container.className = classNames + " active";
		var startLatLng,latlng, shape;
		map._container.style.cursor = 'crosshair';
		
		//Tool Measuring Disable
		measuringTool.disable();
		document.getElementById("measuring").className = "leaflet-bar-part";
		
		//adding an EventListener
		map.addEventListener('click', function(e) { 

				 startLatLng=e.latlng;
				 map.removeEventListener('click') ; //removing the EventListener
				 
				 //adding the EventListener mouseMove in order to draw the rectangle selection for each movement
				 map.addEventListener('mousemove', function(e3) {
					latlng=e3.latlng;
					if (!shape) {
						shape = new L.Rectangle(new L.LatLngBounds(startLatLng, latlng), {color: '#007FFF', weight: 2, opacity: 0.8, fill: true, fillColor: '#FFFFFF',	fillOpacity: 0.6});
						map.addLayer(shape);
					} else {
						shape.setBounds(new L.LatLngBounds(startLatLng, latlng));
					}
				 });
				 
				 //adding the EventListener click, to know when the user has finished this selection
				 map.addEventListener('click', function(e2) {  
					latlng=e2.latlng;
					map.removeEventListener('click') ; //removing the EventListener click
					map.removeEventListener('mousemove') ; //removing the EventListener mousemove
					//Removing the selection rectangle and changing the BBox of the map
					modifBBox(startLatLng, latlng) ;
					map.removeLayer(shape);
					map._container.style.cursor = '';
					self._container.className = classNames;
				 });	
				 
			});
		}
		
	});
	return container;
	}
});

L.control.zoombox = function (options) {
    return new L.Control.ZoomBox(options);
};
