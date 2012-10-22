// Filename: router.js
define([
  	'jquery',
  	'underscore',
  	'backbone',
  	'views/HeaderView',
  	'views/FooterView',
  	'views/HomeView'
], function($, _, Backbone, HeaderView, FooterView, HomeView){
  	var AppRouter = Backbone.Router.extend({
  		initialize: function() {
  			console.log('router.js loaded');
  			// initialize views
  			this.headerView = new HeaderView();
    		this.footerView = new FooterView();
    		this.homeView = new HomeView();
    		// render static views
    		this.footerView.render();
  		},
    	routes: {
    		'home'	: 'showHome',
      		'*actions'	: 'showHome'
    	},
    	showHome: function(action) {
    		console.log('rendering showHome');
    		console.log('request for: ' + action);
    		// render dynamic views
    		this.headerView.renderHome();
    		this.homeView.render();
    	}
  	});

  	return {
    	initialize: function() {
	    	(new AppRouter);
	    	
	    	Backbone.history.start();
	  	}
  	};
});