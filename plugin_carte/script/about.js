/***** About.js *****/

$(function() {
	$( "#dialogAbout" ).dialog({
		autoOpen: false,
		draggable: true,
		height: 170,
		width: 300,
		title: "About",
		position: {
			my: "right bottom", 
			at: "right top", 
			of: ".leaflet-control-attribution.leaflet-control"
		},
		show: {
			effect: "fold", 
			size:10,
			horizFirst:true,
			duration: 1000
		},
		hide: {
			effect: "fold",
			size:10,
			horizFirst:true,
			duration: 1000
		}
	});
	
});
function chargeAbout() {
		if ($( "#dialogAbout" ).dialog("isOpen")){
			$( "#dialogAbout" ).dialog("close");				
		}
		else {
			$( "#dialogAbout" ).dialog("open");
		}
}