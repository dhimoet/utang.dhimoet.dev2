// Filename: router.js
define([
  	'jquery',
  	'underscore',
  	'backbone',
  	'views/LoginView',
  	'views/LogoutView',
  	'views/HeaderView',
  	'views/FooterView',
  	'views/HomeView'
], function($, _, Backbone, LoginView, LogoutView, HeaderView, FooterView, HomeView){
  	var AppRouter = Backbone.Router.extend({
  		initialize: function() {
  			console.log('router.js loaded');
  			// check if current user has a facebook token
  			this.user_fb_token = this.getCookie();
  			if(!this.user_fb_token) {
  				// no token - redirect to login page
  				window.location.href = "#/login";
  			}
  			else {
  				// user has a token
  				// initialize views
	  			this.headerView = new HeaderView();
	    		this.footerView = new FooterView();
	    		this.homeView = new HomeView();
	    		// render static views
	    		this.footerView.render();
  			}
  		},
  		getCookie: function() {
  			var cookies = document.cookie.split(';');
  			var cookie = '';
  			for(var i=0; i<cookies.length; i++) {
  				cookie = cookies[i].split('=');
  				if(cookie[0] == 'utangapp_fb_token') {
  					return cookie[1];
  				}
  			}
  			return 0;
  		},
  		setCookie: function() {
  			var exp_date = new Date();
  			exp_date.setDate(exp_date.getDate() + 60);
  			document.cookie = 'utangapp_fb_token=';
  			document.cookie+= 'replace_this_with_token';
  			document.cookie+= ';expires='+ exp_date;
  		},
    	routes: {
    		'login'		: 'showLogin',
    		'logout'	: 'showLogout',
    		'home'		: 'showHome',
      		'*actions'	: 'showHome'
    	},
    	showLogin: function() {
    		// initialize login view
			this.loginView = new LoginView();
			// render login view
			this.loginView.render();
    	},
    	showLogout: function() {
    		// initialize login view
			this.logoutView = new LogoutView();
			// render login view
			this.logoutView.render();
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