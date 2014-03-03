var map;

// fullzoom area 
var southWest = L.latLng(46.8132, -2.6086),
        northEast = L.latLng(47.8587, -0.8777),
        bounds = L.latLngBounds(southWest, northEast);

var rising = L.geoJson(null, {
    pointToLayer: function(feature, latlng) {
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
    onEachFeature: function(feature, layer) {
        if (feature.properties) {
            var content = "<table class='table table-striped table-bordered table-condensed'>" +
                    "<tr><th>Nom</th><td>" + feature.properties.NAME + "</td></tr>" +
                    "<tr><th>Téléphone</th><td>" + feature.properties.TEL + "</td></tr>" +
                    "<tr><th>Addresse</th><td>" + feature.properties.ADDRESS1 + "</td></tr>" +
                    "<tr><th>Site internet</th><td><a class='url-break' href='" + feature.properties.URL + "' target='_blank'>" + feature.properties.URL + "</a></td></tr>" +
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
            }
            ;
        }
    }
});
$.getJSON("data/rising.geojson", function(data) {
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


var map = new L.Map('map', {
    layers: [basemap],
    center:  bounds.getCenter(), zoom: 9
});



//Create a custom group of layers
var baseLayers = {
    "Fond de carte": basemap
};

//Add some layers delivered with geoserver   	

var communes_1794 = L.tileLayer.wms("http://www.cartopolis.org/geoserver/IRSTV/wms", {
    layers: 'IRSTV:communes_44_1794_1_1_snapshot',
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    attribution: "Les communes en 1794"
});

var communes_1806 = L.tileLayer.wms("http://www.cartopolis.org/geoserver/IRSTV/wms", {
    layers: 'IRSTV:communes_44_1806_1_1_snapshot',
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    attribution: "Les communes en 1806"
});

var communes_1836 = L.tileLayer.wms("http://www.cartopolis.org/geoserver/IRSTV/wms", {
    layers: 'IRSTV:communes_44_1836_1_1_snapshot',
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    attribution: "Les communes en 1836"
});

var communes_1866 = L.tileLayer.wms("http://www.cartopolis.org/geoserver/IRSTV/wms", {
    layers: 'IRSTV:communes_44_1866_1_1_snapshot',
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    attribution: "Les communes en 1866"
});

var communes_1896 = L.tileLayer.wms("http://www.cartopolis.org/geoserver/IRSTV/wms", {
    layers: 'IRSTV:communes_44_1896_1_1_snapshot',
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    attribution: "Les communes en 1896"
});


var communes_1911 = L.tileLayer.wms("http://www.cartopolis.org/geoserver/IRSTV/wms", {
    layers: 'IRSTV:communes_44_1911_1_1_snapshot',
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    attribution: "Les communes en 1911"
});

var communes_1946 = L.tileLayer.wms("http://www.cartopolis.org/geoserver/IRSTV/wms", {
    layers: 'IRSTV:communes_44_1946_1_1_snapshot',
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    attribution: "Les communes en 1946"
});

var communes_1962 = L.tileLayer.wms("http://www.cartopolis.org/geoserver/IRSTV/wms", {
    layers: 'IRSTV:communes_44_1962_1_1_snapshot',
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    attribution: "Les communes en 1962"
});

var communes_1982 = L.tileLayer.wms("http://www.cartopolis.org/geoserver/IRSTV/wms", {
    layers: 'IRSTV:communes_44_1982_1_1_snapshot',
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    attribution: "Les communes en 1982"
});

var communes_1999 = L.tileLayer.wms("http://www.cartopolis.org/geoserver/IRSTV/wms", {
    layers: 'IRSTV:communes_44_1999_1_1_snapshot',
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    attribution: "Les communes en 1999"
});

var communes_2006 = L.tileLayer.wms("http://www.cartopolis.org/geoserver/IRSTV/wms", {
    layers: 'IRSTV:communes_44_2006_1_1_snapshot',
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    attribution: "Les communes en 2006"
});

var communes_2010 = L.tileLayer.wms("http://www.cartopolis.org/geoserver/IRSTV/wms", {
    layers: 'IRSTV:communes_44_2010_1_1_snapshot',
    format: 'image/png',
    transparent: true,
    version: '1.1.0',
    attribution: "Les communes en 2010"
});

map.addLayer(communes_1794);


// Overlay layers are grouped
var groupedOverlays = {
    "Limite communale": {
        "en 1794": communes_1794,
        "en 1806": communes_1806,
        "en 1836": communes_1836,
        "en 1866": communes_1866,
        "en 1896": communes_1896,
        "en 1911": communes_1911,
        "en 1946": communes_1946,
        "en 1962": communes_1962,
        "en 1982": communes_1982,
        "en 1999": communes_1999,
        "en 2006": communes_2006,
        "en 2010": communes_2010
    }
};

//Load the group layers plugin
var layerControl = L.control.groupedLayers(baseLayers, groupedOverlays);
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
    var div = L.DomUtil.create('div', 'info legend'), labels = ["<h6>Densité<br> de population<br> (hab/km²)</h6>"];
    div.innerHTML = labels.join('');
    div.innerHTML += '<img src="http://www.cartopolis.org/geoserver/IRSTV/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=IRSTV:communes_44_1789_1_1_snapshot" alt="legend" width="84" height="120">';
    return div;
};

//Add the legends to the legend frame
$("#legendBar").html(legend1);


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
    if (city !== undefined) {
        if (result.length !== 0) {
            result += ", ";
        }
        result += city;
    }
    if (state !== undefined) {
        if (result.length !== 0) {
            result += ", ";
        }
        result += state;
    }
    if (country !== undefined) {
        if (result.length !== 0) {
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
                        lat: osm.lat,
                        lng: osm.lon,
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
            map.setView([datum.lat, datum.lng], 10);
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
