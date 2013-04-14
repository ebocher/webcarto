/*******************Start measuring button***************/
L.Control.Mesure = L.Control.extend({
    options: {
        position: 'topright',
        drawCircle: true,
        follow: true, // follow with zoom and pan the user's location
    },
	onAdd: function (map) {
	var self = this;
	var className = 'leaflet-control-mesure',
		classNames = className + ' leaflet-bar leaflet-control',
		container = L.DomUtil.create('div', classNames);

	var link = L.DomUtil.create('a', 'leaflet-bar-part', container);
	link.href = '#';
	link.title = 'Mesure de distance entre deux points';

	L.DomEvent
		.on(link, 'click', L.DomEvent.stopPropagation)
		.on(link, 'click', L.DomEvent.preventDefault)
		.on(link, 'click', function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			if (measuringTool) {
				measuringTool.disable();
				self._container.className = classNames;
			}
		} else {
			$(this).addClass('active');
			if (!measuringTool) {
				measuringTool = new L.MeasuringTool(map);
			}
			measuringTool.enable();
			self._container.className = classNames + " active";
		}
		})
		.on(link, 'dblclick', L.DomEvent.stopPropagation);

	return container;
	}
});
	
	var measuringTool;
	var optionsMeasureLabel = {
        minWidth: 50,
        autoPan: false,
        closeButton: false,
        className: 'measuring-label'
    };

L.control.mesure = function (options) {
    return new L.Control.Mesure(options);
};
