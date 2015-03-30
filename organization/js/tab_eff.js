$( document ).ready(function() {

  	
  	window.activeTab = $( "#Begin" );
  	window.activeContainer = $( "#tabs-1" );

  	$( "#Begin" ).addClass( "tabulous_active" );
  	$( "#tabs-2" ).addClass('hidescale');
  	$( "#tabs-3" ).addClass('hidescale');
  	
  	$( "#Begin" ).click(function() {

		effect( "#Begin" , "#tabs-1" );
	});

	$( "#About" ).click(function() {

  		effect( "#About" , "#tabs-2" );
	});

	$( "#Contact" ).click(function() {

	  	effect( "#Contact" , "#tabs-3" );
	});

	function effect ( actTab , actCont , menu_name , tab_name ) {
		
		window.activeTab.removeClass("tabulous_active");
	  	window.activeContainer.removeClass("showscale").addClass("hidescale");

	  	window.activeTab = $( actTab );
	  	window.activeContainer = $( actCont );
	  	$( actTab ).addClass( "tabulous_active" );
	  	$( actCont ).addClass('make_transist').addClass('showscale'); 
	}

	initialize( 47.9200,106.9200 );
});