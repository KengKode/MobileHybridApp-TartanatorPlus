
$(document).bind("mobileinit", function() {
	// initialize configuration here
	$.mobile.loadingMessage="Fetching page...";

	// add page events here
	$('#homepage').live('pagebeforecreate', function(e) {
		console.log( 'This page was just inserted into the dom!' );
	});

});



