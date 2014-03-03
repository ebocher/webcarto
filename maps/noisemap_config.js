var map;

// fullzoom area 
var southWest = L.latLng(47.18, -1.62),
        northEast = L.latLng(47.29, -1.46),
        bounds = L.latLngBounds(southWest, northEast);

var rising = L.geoJson(null, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon: L.icon({
                iconUrl: "img/here.png",
                iconSize: [32, 32],
                iconAnchor: [12, 28],
                popupAnchor: [0, -25]
            }),
            title: feature.properties.NAME,
            riseOnHover: true
        });
    },
    onEachFeature: function (feature, layer) {
        if (feature.properties) {
            var content =   "<table class='table table-striped table-bordered table-condensed'>"+
                                "<tr><th>Nom</th><td>" + feature.properties.NAME + "</td></tr>"+
                                "<tr><th>Téléphone</th><td>" + feature.properties.TEL + "</td></tr>"+
                                "<tr><th>Addresse</th><td>" + feature.properties.ADDRESS1 + "</td></tr>"+
                                "<tr><th>Site internet</th><td><a class='url-break' href='" + feature.properties.URL + "' target='_blank'>" + feature.properties.URL + "</a></td></tr>"+
                            "<table>";

            if (document.body.clientWidth <= 767) {
                layer.on({
                    click: function(e) {
                        $("#feature-title").html(feature.properties.NAME);
                        $("#feature-info").html(content);
                        $("#featureModal").modal("show");
                    }
                });

            } else {
                layer.bindPopup(content, {
                    maxWidth: "auto",
                    closeButton: false
                });
            };
        }
    }
});
$.getJSON("data/rising.geojson", function (data) {
    rising.addData(data);
});


// Larger screens get expanded layer control
if (document.body.clientWidth <= 767) {
    var isCollapsed = true;
} else {
    var isCollapsed = false;
}
;

var cloudmadeUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
var basemap = L.tileLayer(cloudmadeUrl, {attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors', maxZoom: 18});



map = L.map("map", {
    zoom: 13,
    center: bounds.getCenter(),
    layers: [basemap, rising]
});

//Create a custom group of layers
var baseLayers = {
    "Fond de carte": basemap
};

//Add some layers delivered with geoserver
var noiseMap_bat_2008 = L.tileLayer.wms("http://cartopolis.org/geoserver/IRSTV/wms", {
    layers: 'IRSTV:noise_level_bat_resid_2008_nantes',
    format: 'image/png',
    transparent: true,
    styles: 'Noise_map_db_bat_resid_2008',
    version: '1.3.0',
    attribution: "Année de référence avec données d'enquêtes."
});

var noiseMap_bat_test1 = L.tileLayer.wms("http://cartopolis.org/geoserver/IRSTV/wms", {
    layers: 'IRSTV:noise_level_bat_resid_2008_nantes',
    format: 'image/png',
    transparent: true,
    styles: 'Noise_map_db_bat_resid_test_1',
    version: '1.3.0',
    attribution: "Baisse de la demande automobile de 25%. "
});

var noiseMap_bat_test2 = L.tileLayer.wms("http://cartopolis.org/geoserver/IRSTV/wms", {
    layers: 'IRSTV:noise_level_bat_resid_2008_nantes',
    format: 'image/png',
    transparent: true,
    styles: 'Noise_map_db_bat_resid_test_2',
    version: '1.3.0',
    attribution: "Augmentation de la demande globale de déplacement de 20%."
});

var noiseMap_bat_test4 = L.tileLayer.wms("http://cartopolis.org/geoserver/IRSTV/wms", {
    layers: 'IRSTV:noise_level_bat_resid_2008_nantes',
    format: 'image/png',
    transparent: true,
    styles: 'Noise_map_db_bat_resid_test_4',
    version: '1.3.0',
    attribution: "Multiplication par deux des prix du carburant"
});

map.addLayer(noiseMap_bat_2008);


var iris_contour = L.tileLayer.wms("http://cartopolis.org/geoserver/IRSTV/wms", {
    layers: 'IRSTV:iris2008_lden2008_nantes',
    format: 'image/png',
    transparent: true,
    styles: 'polygon_vide',
    version: '1.3.0'
});

var iris_lden_2008 = L.tileLayer.wms("http://cartopolis.org/geoserver/IRSTV/wms", {
    layers: 'IRSTV:iris2008_lden2008_nantes',
    format: 'image/png',
    transparent: true,
    styles: 'Noise_map_db_pop_sup_68db',
    version: '1.3.0'
});


var iris_lden_test1 = L.tileLayer.wms("http://cartopolis.org/geoserver/IRSTV/wms", {
    layers: 'IRSTV:iris2008_lden_test1_nantes',
    format: 'image/png',
    transparent: true,
    styles: 'Noise_map_db_pop_sup_68db',
    version: '1.3.0'
});

var iris_lden_test2 = L.tileLayer.wms("http://cartopolis.org/geoserver/IRSTV/wms", {
    layers: 'IRSTV:iris2008_lden_test2_nantes',
    format: 'image/png',
    transparent: true,
    styles: 'Noise_map_db_pop_sup_68db',
    version: '1.3.0'
});

var iris_lden_test4 = L.tileLayer.wms("http://cartopolis.org/geoserver/IRSTV/wms", {
    layers: 'IRSTV:iris2008_lden_test4_nantes',
    format: 'image/png',
    transparent: true,
    styles: 'Noise_map_db_pop_sup_68db',
    version: '1.3.0'
});


map.addLayer(iris_contour);

// LDEN pour les bâtiments
var groupedLDENBat = {
    "LDEN max en dB(A) par bâtiments": {
        "Situation de référence en 2008": noiseMap_bat_2008,
        "Scénario test 1": noiseMap_bat_test1,
        "Scénario test 2": noiseMap_bat_test2,
        "Scénario test 4": noiseMap_bat_test4
    },
    "Exposition de la population <br>(% d'habs > 68 dB(A))": {
        "Contours IRIS en 2008": iris_contour,
        "Situation de référence en 2008": iris_lden_2008,
        "Scénario test 1": iris_lden_test1,
        "Scénario test 2": iris_lden_test2,
        "Scénario test 4": iris_lden_test4
    }
};


//Load the group layers plugin
var layerControl = L.control.groupedLayers(baseLayers, groupedLDENBat);
map.addControl(layerControl);

//Load mouse position plugin
var mousePosition =  L.control.mousePosition();
map.addControl(mousePosition);

var sidebar = L.control.sidebar("sidebar", {
    closeButton: true,
    position: "left"
}).addTo(map);


//Create a legend for noise map
legend1 = function() {
    var div = L.DomUtil.create('div', 'info legend'), labels = ["<h6>Nuisance sonore <br> en dB(A)</h6>"];
    div.innerHTML = labels.join('');
    div.innerHTML += '<img src="http://www.cartopolis.org/geoserver/IRSTV/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=IRSTV:noise_level_bat_resid_2008_nantes" alt="legend" width="58" height="140">';
    return div;
};

//Create a legend for noise map
legend2 = function() {
    var div = L.DomUtil.create('div', 'info legend'), labels = ["<h6>Pourcentage d'habitants <br> (> 68dB (A))</h6>"];
    ;
    div.innerHTML = labels.join('');
    div.innerHTML += '<img src="http://www.cartopolis.org/geoserver/IRSTV/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=IRSTV:iris2008_lden2008_nantes" alt="legend" width="66" height="120">';
    return div;
};

//Add the legends to the legend frame
$("#legendBar").html(legend1);
$("#legendBar").append(legend2);



// Highlight search box text on click
$("#searchbox").click(function() {
    $(this).select();
});

addressResult = function(house_number, road, city, state, country) {
    result = "";
    if (house_number !== undefined) {
        result += house_number;
    }    
    if (road !== undefined) {
        if (result.length !== 0) {
            result += ", ";
        }
        result += road;
    }
    if(city !== undefined){
        if (result.length !== 0) {
            result += ", ";
        }
        result += city;
    }    
    if(state !== undefined){
        if(result.length !== 0) {
            result += ", ";
        }
        result += state;
    }
    if(country !== undefined){
        if(result.length !== 0) {
            result += ", ";
        }
        result += country;
    }
    return result;
};

// Typeahead search functionality
$(document).one("ajaxStop", function() {

    var geonamesBH = new Bloodhound({
        name: "GeoNames",
        datumTokenizer: function(d) {
            return Bloodhound.tokenizers.whitespace(d.name);
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        remote: {
            url: "http://nominatim.openstreetmap.org/search?format=json&limit=5&q=%QUERY&addressdetails=1",
            filter: function(list) {
                return $.map(list, function(osm) {
                    return {
                        name: addressResult(osm.address["house_number"], osm.address["road"], osm.address["city"], osm.address["state"], osm.address["country"]),
                        bbox: osm.boundingbox,
                        source: "GeoNames"
                    };
                });
            },
            ajax: {
                // beforeSend: function (jqXhr, settings) {
                //   settings.url += "&east=" + map.getBounds().getEast() + "&west=" + map.getBounds().getWest() + "&north=" + map.getBounds().getNorth() + "&south=" + map.getBounds().getSouth();
                // $("#searchicon").removeClass("fa-search").addClass("fa-refresh fa-spin");
                //},
                complete: function(jqXHR, status) {
                    $('#searchicon').removeClass("fa-refresh fa-spin").addClass("fa-search");
                }
            }
        },
        limit: 10
    });
    geonamesBH.initialize();

    // instantiate the typeahead UI
    $("#searchbox").typeahead({
        minLength: 3,
        highlight: true,
        hint: false
    }, {
        name: "GeoNames",
        displayKey: "name",
        source: geonamesBH.ttAdapter(),
        templates: {
            header: "<h4 class='typeahead-header'><img src='img/globe.png' width='20' height='20'>&nbsp;Résultat(s)</h4>"
        }
    }).on("typeahead:selected", function(obj, datum) {
        
        if (datum.source === "GeoNames") {
             var   southWest = new L.LatLng(datum.bbox[0],datum.bbox[2]),
                northEast = new L.LatLng(datum.bbox[1], datum.bbox[3]),
                bounds = new L.LatLngBounds(southWest, northEast);
            map.fitBounds(bounds);
        }
        ;
        if ($(".navbar-collapse").height() > 50) {
            $(".navbar-collapse").collapse("hide");
        }
        ;
    }).on("typeahead:opened", function() {
        $(".navbar-collapse.in").css("max-height", $(document).height() - $(".navbar-header").height());
        $(".navbar-collapse.in").css("height", $(document).height() - $(".navbar-header").height());
    }).on("typeahead:closed", function() {
        $(".navbar-collapse.in").css("max-height", "");
        $(".navbar-collapse.in").css("height", "");
    });
    $(".twitter-typeahead").css("position", "static");
    $(".twitter-typeahead").css("display", "block");
});

// Placeholder hack for IE
if (navigator.appName == "Microsoft Internet Explorer") {
    $("input").each(function() {
        if ($(this).val() == "" && $(this).attr("placeholder") != "") {
            $(this).val($(this).attr("placeholder"));
            $(this).focus(function() {
                if ($(this).val() == $(this).attr("placeholder"))
                    $(this).val("");
            });
            $(this).blur(function() {
                if ($(this).val() == "")
                    $(this).val($(this).attr("placeholder"));
            });
        }
    });
}
