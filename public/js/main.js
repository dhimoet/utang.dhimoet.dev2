// Filename: main.js

// Require.js allows us to configure shortcut alias
// There usage will become more apparent futher along in the tutorial.
require.config({
	baseUrl: '/js/',
  	paths: {
	    jquery: 'libs/jquery',
	    underscore: 'libs/underscore',
	    backbone: 'libs/backbone',
	    bootstrap: 'libs/bootstrap',
	    text: 'libs/text'
  	},
  	shim: {
	    backbone: {
	        deps: ["underscore", "jquery"],
	        exports: "Backbone"
	    },
	    underscore: {
	        exports: "_"
	    }
	}
});

require([
  	// Load our app module and pass it to our definition function
  	'app',
], function(App){
	console.log('main.js loaded');
  	// The "app" dependency is passed in as "App"
  	App.initialize();
});