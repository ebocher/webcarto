	//Fonction qui recadre la map sur le rectangle dont les angles (diagonalement opposés) sont startLatLng et latlng
function modifBBox(startLatLng, latlng){ 
	//Création des variables (de type <Number>) latmin latmax lngmin lngmax
	var latmin = Math.min(startLatLng.lat, latlng.lat),
	latmax = Math.max(startLatLng.lat, latlng.lat) ,
	lngmin = Math.min(startLatLng.lng, latlng.lng) ,
	lngmax = Math.max(startLatLng.lng, latlng.lng) ;

	//Création des points pour définir la BBox puis création de la BBox 
	var southWest = new L.LatLng(latmin, lngmin),
		northEast = new L.LatLng(latmax, lngmax),
		BBox = new L.LatLngBounds(southWest, northEast);

	/*modifier la carte pour afficher la BBox en argument (avec le zoom minimal. Donc si le rectangle sélectionné est plus haut que large, on verra exactement ce qui a été sélectionné en hauteur et un peu plus en largeur)*/
	map.fitBounds(BBox);
}



L.Control.ZoomBox = L.Control.extend({
    options: {
        position: 'topright',
        drawCircle: true,
        follow: true, // follow with zoom and pan the user's location
    },
	onAdd: function (map) {

	var className = 'leaflet-control-zoombox',
		classNames = className + ' leaflet-bar leaflet-control',
		container = L.DomUtil.create('div', classNames);

	var link = L.DomUtil.create('a', 'leaflet-bar-part', container);
	link.href = '#';
	link.title = 'Zoom sur la sélection';

	L.DomEvent
		.on(link, 'click', L.DomEvent.stopPropagation)
		.on(link, 'click', L.DomEvent.preventDefault)
		.on(link, 'click', function() {

	var startLatLng,latlng, shape;
	map._container.style.cursor = 'crosshair';

	//on ajoute l’EventListener suivant qui permettra de lancer la fonction si le bouton est enfoncé
	map.addEventListener('click', function(e) { 

			 // e est l’objet (de type MouseEvent) renvoyé par l’évènement mouseup
			 startLatLng=e.latlng;
			 map.removeEventListener('click') ; //on ne suit (=Listen) plus l’event mouseup 
			 
			 //on suit l'event mousemove pour retracer le rectangle de séléction à chaque mouvement de souris
			 map.addEventListener('mousemove', function(e3) {
				latlng=e3.latlng;
				//on trace le rectangle qui suit le curseur (on le crée s'il n'existe pas, sinon on le modifie)
				if (!shape) {
					shape = new L.Rectangle(new L.LatLngBounds(startLatLng, latlng), {color: '#007FFF', weight: 2, opacity: 0.8, fill: true, fillColor: '#FFFFFF',	fillOpacity: 0.6});
					map.addLayer(shape);
				} else {
					shape.setBounds(new L.LatLngBounds(startLatLng, latlng));
				}
			 });
			 
			 //on suit l’event mousedown qui nous permet de savoir quand on a fini le recadrage
			 map.addEventListener('click', function(e2) {  
				latlng=e2.latlng;
				map.removeEventListener('click') ; //on ne suit plus l’event mousedown
				map.removeEventListener('mousemove') ; //on ne suit plus l’event mousedown
				//on dispose des deux coins => recadrage carte et suppression du rectangle
				map.removeLayer(shape);
				modifBBox(startLatLng, latlng) ;
				map._container.style.cursor = '';

			 });	
			 
		});
	});
	return container;
	}
});

L.control.zoombox = function (options) {
    return new L.Control.ZoomBox(options);
};
