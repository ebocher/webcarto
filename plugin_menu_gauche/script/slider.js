/**
*				Script for the differents type of slider of the left menu
**/

// Opacity refresh with slider

$(function() { //Slider /!\ Only for one, for now !
	$( "#slider" ).slider({
		orientation: "horizontal",
		range: "min",
		value: 1,
        min: 0,
        max: 1,
        step: 0.1,
		slide: function (event, ui) {
            mapquest.setOpacity(ui.value);
            nysdop.setOpacity(1 - ui.value);
			}
	});
});