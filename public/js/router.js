// Filename: router.js
define([
  	'jquery',
  	'underscore',
  	'backbone',
  	'facebook',
  	'collections/UserCollection',
  	'views/LoginView',
  	'views/HeaderView',
  	'views/FooterView',
  	'views/MainView'
], function($, _, Backbone, FB, UserCollection, LoginView, HeaderView, FooterView, MainView){
  	var AppRouter = Backbone.Router.extend({
  		initialize: function() {
  			console.log('router.js loaded');
  			// initialize collections
  			this.userCollection = new UserCollection();
  			// initialize views
  			this.loginView = new LoginView();
			this.headerView = new HeaderView();
			this.footerView = new FooterView();
			this.mainView = new MainView();
			
			// make sure nav footer only rendered once
			this.footerView.render();
			
			// initialize event binds
			this.userCollection.on('reset', this.userCollectionChanged, this);
			
			// authentication request
			this.userCollection.fetch();
  		},
  		/**
  		 * 	List of routes and handlers
  		 */
    	routes: {
    		'login'					: 'showLogin',
			':route/:action/*path'	: 'showMain',
			':route/:action'		: 'showMain',
			':route'				: 'showMain',
      		'*actions'				: 'showDefault'
    	},
    	showMain: function(route, action, path) {
			// render dynamic views
			this.headerView.render(route, action);
			this.mainView.render(route, action, path);
		},
		showLogin: function() {
			this.headerView.render('login');
			this.footerView.render('login');
			this.loginView.render();
		},
    	showDefault: function(route) {
			// render dynamic views
			this.headerView.render();
			this.mainView.render();
    	},
		/**
		 * 	Event handlers
		 */
		userCollectionChanged: function() {
			var response = this.userCollection.toJSON();
			// check the response for login status
			if(typeof response[0].status != 'undefined' && !response[0].status) {
				// if not logged in
				console.log('redirecting to login page');
				window.location.href = "#/login";
			}
		}
  	});

  	return {
    	initialize: function() {
	    	(new AppRouter);
	    	
	    	Backbone.history.start();
	  	}
  	};
});
