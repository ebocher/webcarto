/**
*				Script for the left menu (slider)
**/

// Opacity refresh with slider

function refreshOpacity(Calque) {
	var opacite = $( this ).slider( "value" );
	$( "Calque" ).css( "opacity :" + opacite );
};

$(function() { //Slider /!\ Only for one, for now !
	$( "#calque1" ).slider({
		orientation: "horizontal",
		range: "min",
		max: 100,
		value: 100,
		//slide: refreshOpacity(this),
		//change: refreshOpacity(this)
	});
});