WebCarto
========

Portail web pour la consultation de carte en ligne


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