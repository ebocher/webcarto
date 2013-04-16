/**
*				Script for content of the left menu
**/

$(document).ready(function () {
    
	
	//Definition of the click action on the button close
	$(function () {
        $("button", ".layers").button();
        $("button", ".layers").click(function () {
            $("#layersdialog").dialog("open");
            return false;
        });
    });
	
	
    $.fx.speeds._default = 1000;
    
	/*creation of 2 var that countains the size fo the window*/
				
	var viewportwidth;
	var viewportheight;
	if (typeof window.innerWidth != 'undefined')
	{
		viewportwidth = window.innerWidth,
		viewportheight = window.innerHeight
	}
			  
	// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
	 
	else if (typeof document.documentElement != 'undefined'
		&& typeof document.documentElement.clientWidth !=
		'undefined' && document.documentElement.clientWidth != 0)
	{
		viewportwidth = document.documentElement.clientWidth,
		viewportheight = document.documentElement.clientHeight
	}
			  
	// older versions of IE

	else
	{
		viewportwidth = document.getElementsByTagName('body')[0].clientWidth,
		viewportheight = document.getElementsByTagName('body')[0].clientHeight
	}
			  
	/*function that changes the size of the menu if the window is resized*/	
	var timer;
	window.onresize = function(){
		clearInterval( timer );
		timer = setTimeout( function(){
			if (typeof window.innerWidth != 'undefined')
			{
				viewportwidth = window.innerWidth,
				viewportheight = window.innerHeight
			}
			  
			// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
			 
			else if (typeof document.documentElement != 'undefined'
				&& typeof document.documentElement.clientWidth !=
				'undefined' && document.documentElement.clientWidth != 0)
			{
				viewportwidth = document.documentElement.clientWidth,
				viewportheight = document.documentElement.clientHeight
			}
			  
			// older versions of IE
			  
			else
			{
				viewportwidth = document.getElementsByTagName('body')[0].clientWidth,
				viewportheight = document.getElementsByTagName('body')[0].clientHeight
			}
			$("#layersdialog").dialog({height: viewportheight})

		}, 400 );
	}
	
	
	
	//Definition of the layersdialog
	
	$(function () {
        $("#layersdialog").dialog({
            autoOpen: false,
			closeOnEscape: true,
			draggable: false ,
            position: [0, 0],
            width: 200,
			height: viewportheight,
			show: {effect: 'slide', speed: 1000, direction: "left"},
            hide: {effect: 'slide', speed: 1000, direction: "left"},
			resizable: false,
			
			buttons: 	[ 	{	id:"close_button", click: function() { 
									$( this ).dialog( "close" ); 
									$( "#layersopener" ).show( {effect: 'slide', speed: 10000, direction: "left"} ); 
								} 
							} ,		
						],
						
						
						
			
			open: function(){
				$(this).parent().children().children(".ui-dialog-titlebar-close").hide();
				$(this).parent().children().children(".ui-dialog-titlebar").hide();
                $("#accordion").accordion({
					autoHeight: false,
					collapsible: true,
					active: false
				});
				
            }

        });
    });	
	
	
	
	// Definition of the layers' accordion
	
	$(function(){
		$("#sous_accordion1").accordion({
			autoHeight: false,
			collapsible: true,
			active: false
		});
		
	});
			
	$(function(){
		$("#sous_accordion2").accordion({
			autoHeight: false,
			collapsible: true,
			active: false
		});
		
	});
	$(function(){
		$("#sous_accordion3").accordion({
			autoHeight: false,
			collapsible: true,
			active: false
		});
		
	});
	$(function(){
		$("#sous_accordion4").accordion({
			autoHeight: false,
			collapsible: true,
			active: false
		});
		
	});
	$(function(){
		$("#sous_accordion5").accordion({
			autoHeight: false,
			collapsible: true,
			active: false
		});
		
	});	
});