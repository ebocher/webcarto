WebCarto
========

# Plugin map : #


## Structure : ##

From the file map.html :

> < div id="map" >
Is the element used by leaflet to display the map

## Style : ##

The different css proprieties are defined in those files :

> /plugin_carte/style/style.css
> /plugin_carte/style/reset.css
> /plugin_carte/style/jquery-ui.css


The position of the button close is defined thanks to JavaScript

## Javascript : ##

The map and its layers and controls are defined in the file 

> /plugin_carte/script/Map.js


The pop-up "about" and its behaviour is defined in the file :

> /plugin_carte/script/about.js

The declaration of the class of the minimap is done thanks to :

> /plugin_carte/script/L.Control.MiniMap.js



# Plugin left menu : #


## Structure : ##

From the file map.html

> < div id="contenu_gauche" > --> Root node.

> > < div id="close_button" > --> Declaration of the button.
	
> > < div id="layersdialog" > --> Container of the whole list of accordion.

> > > < div id="accordion" > --> Main accordion containing the different categories of maps.

> > > > < div id="accordion_head'X'" > --> Accordion containing the maps of the category number 'X'.

> > > >	< div class="contenu" > --> Container of the content of the accordion above.

> > > > >	< div id="sous_accordion1" > --> Accordion containing the layers of the map.

## Style : ##

All the css proprieties apply to those node are describe in the file:

> /plugin_menu_gauche/style/style.css


The position of the button close is defined thanks to JavaScript

## Javascript : ##

The sliders for the opacity of the layers is defined in the file 

> /plugin_menu_gauche/script/slider.js


The behavior of the content of the left menu (accordion, layresdialog ...) is defined in the file :

> /plugin_menu_gauche/script/menu_content.js


# Plugin right menu : #


## Structure : ##

All those buttons are controlled by the different JavaScript files. They are added to the map in its declaration in :

> /plugin_carte/script/Map.js

## Style : ##

The css proprieties of the ZoomBox is defined in :

> /plugin_menu_droite/style/zoombox.css

The css proprieties of the Measurement tool is defined in :

> /plugin_menu_droite/style/measure.css

The fullscreen is not implemented into the project. When it's used the left menu isn't show. It uses the full screen plugin from LeafLet. It's css proprieties are defined in :

> /plugin_menu_droite/style/FullScreen.css

The localisation function uses the plugin from LeafLet. There are two css (one for I.E.). It's proprieties are defined in :

> /plugin_menu_droite/style/L.Control.Locate.ie.css
> /plugin_menu_droite/style/L.Control.Locate.css

## Javascript : ##

For the different plugins from LeafLet, the JavaScript file use to declare them are :

> /plugin_menu_droit/script/Control.Full.Screen.js
> /plugin_menu_droit/script/L.Control.Locate.js
> /plugin_menu_droit/script/L.Measuring.Tool.js
> /plugin_menu_droit/script/L.Zoom.Control.js

For the zoombox and the measuring the scripts are :

> /plugin_menu_droit/script/measuring.js
> /plugin_menu_droit/script/zoombox.js