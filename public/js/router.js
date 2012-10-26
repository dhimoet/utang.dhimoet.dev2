// Filename: router.js
define([
  	'jquery',
  	'underscore',
  	'backbone',
  	'facebook',
  	'views/HeaderView',
  	'views/FooterView',
  	'views/MainView'
], function($, _, Backbone, FB, HeaderView, FooterView, MainView){
  	var AppRouter = Backbone.Router.extend({
  		initialize: function() {
  			console.log('router.js loaded');
  			// initialize views
			this.headerView = new HeaderView();
			this.footerView = new FooterView();
			this.mainView = new MainView();
  		},
  		/**
  		 * 	List of routes and handlers
  		 */
    	routes: {
      		'*actions'	: 'showDefault'
    	},
    	showDefault: function() {
			// render dynamic views
			this.headerView.renderHome();
			this.footerView.render();
			this.mainView.render();
    	}
  	});

  	return {
    	initialize: function() {
	    	(new AppRouter);
	    	
	    	Backbone.history.start();
	  	}
  	};
});
