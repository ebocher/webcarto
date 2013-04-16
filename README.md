WebCarto
========

Portail web pour la consultation de carte en ligne


# Plugin left menu : #


## Structure : ##

From the file map.html

><div id="contenu_gauche"> is the root node.
>|
>|	<div id="close_button"> is used to declare the button.
>|	
>|	<div id="layersdialog"> contain the whole list of accordion.
>|	|
>|	|	<div id="accordion"> is the main accordion containing the differents categories of maps.
>|	|	|
>|	|	|	<div id="accordion_head'X'"> declare the accordion containing the maps of the categorie number 'X'.
>|	|	|
>|	|	|	<div class="contenu"> contain the content of the accordion above.
>|	|	|	|	
>|	|	|	|	<div id="layersdialog"> contain the whole list of accordion.
>|	|	|	|	|
>|	|	|	|	|	<div id="sous_accordion1"> is the accordion containing the layers of the map.
>|	|	|	|	|

## Style : ##

All the css propreties apply to those node are describe in the file:

> /plugin_menu_gauche/style/style.css


The position of the button close is defined thanks to JavaScript

## Javascript : ##

The sliders for the opacity of the layers is define in the file 

> /plugin_menu_gauche/script/slider.js


The behavior of the content of the left menu (accordion, layresdialog ...) is define in the file :

> /plugin_menu_gauche/script/menu_content.js