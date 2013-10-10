/**
* This script is used to open a popup window that display some informations about the application. 
**/

$(function() {
	$( "#dialogAbout" ).dialog({
		autoOpen: false,
		draggable: true,
		height: 220,
		width: 220,
		title: "About",
		position: {
			my: "right bottom", 
			at: "right top", 
			of: ".leaflet-control-attribution.leaflet-control"
		},
		show: {
			effect: "fade", 
			direction:"down",
			duration: 1200
		},
		hide: {
			effect: "fade", 
			direction:"down",
			duration: 1200
		}
	});
	
});
function loadAbout() {
		if ($( "#dialogAbout" ).dialog("isOpen")){
			$( "#dialogAbout" ).dialog("close");				
		}
		else {
			$( "#dialogAbout" ).dialog("open");
		}
}
