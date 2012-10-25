// Filename: router.js
define([
  	'jquery',
  	'underscore',
  	'backbone',
  	'facebook',
  	'views/LoginView',
  	'views/HeaderView',
  	'views/FooterView',
  	'views/HomeView'
], function($, _, Backbone, FB, LoginView, HeaderView, FooterView, HomeView){
  	var AppRouter = Backbone.Router.extend({
  		initialize: function() {
  			console.log('router.js loaded');
  			
  			// initialize views
			this.headerView = new HeaderView();
			this.footerView = new FooterView();
			this.homeView = new HomeView();
  		},
  		isLoggedIn: function() {
			// check if user is logged in
			if(0) {
				// if yes - proceed
				return true;
			}
			else {
				// if not - redirect to login page
				window.location.href = "#/login";
				return false;
			}
		},
  		
  		/**
  		 * 	List of routes and handlers
  		 */
    	routes: {
    		'login'		: 'showLogin',
    		'logout'	: 'showLogout',
    		'home'		: 'showHome',
      		'*actions'	: 'showHome'
    	},
    	showLogin: function() {
			if(!this.isLoggedIn()) {
				// initialize login view
				this.loginView = new LoginView();
				// render login view
				this.loginView.render();
			}
    	},
    	showLogout: function() {
			// logout user from system
			// logout user from facebook
    	},
    	showHome: function(action) {
			if(this.isLoggedIn()) {
				// render dynamic views
				this.headerView.renderHome();
				this.homeView.render();
				this.footerView.render();
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
