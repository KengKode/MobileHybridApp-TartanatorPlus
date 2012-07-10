var myApp = function() {
	var greetingMsg = 'hello world!';

	return {
		sayHello: function() {
			console.log(greetingMsg);
			$('#greeting').html(greetingMsg);
		}
	}

}();

$('#homePage').live('pageinit', function() {
	myApp.sayHello();

});



// $(function(){

// 	// define app
// 	var iSayHi = {};

// 	(function(app){

// 		// declare variables here

// 		app.init = function() {
// 			console.log('app.init');
// 			app.bindings();
// 			app.sayHello();
// 		}

// 		app.bindings = function(){
// 			console.log('app.bindings');

// 			$('body').bind('tap',function(e) {
// 				console.log('tap');
// 			});
// 		}

// 		app.sayHello = function(){
// 			$('#homepage').html('hello');	
// 		};

// 		app.init();

// 	})(iSayHi);
// });

