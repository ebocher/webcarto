WebCarto
========

Portail web pour la consultation de carte en ligne


# Plugin map : #


## Structure : ##

From the file map.html :

> < div id="map" >
Is the element used by leaflet to display the map

## Style : ##

The different css propreties are defined in those files :

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

> > > < div id="accordion" > --> Main accordion containing the differents categories of maps.

> > > > < div id="accordion_head'X'" > --> Accordion containing the maps of the categorie number 'X'.

> > > >	< div class="contenu" > --> Container of the content of the accordion above.

> > > > >	< div id="sous_accordion1" > --> Accordion containing the layers of the map.

## Style : ##

All the css propreties apply to those node are describe in the file:

> /plugin_menu_gauche/style/style.css


The position of the button close is defined thanks to JavaScript

## Javascript : ##

The sliders for the opacity of the layers is define in the file 

> /plugin_menu_gauche/script/slider.js


The behavior of the content of the left menu (accordion, layresdialog ...) is define in the file :

> /plugin_menu_gauche/script/menu_content.js