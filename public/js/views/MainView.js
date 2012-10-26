// Filename: MainView.js
define([
  	'jquery',
  	'underscore',
  	'backbone',
  	'collections/UserCollection',
  	'text!templates/login.html',
  	'text!templates/home.html'
], function($, _, Backbone, UserCollection, loginTemplate, homeTemplate){
  	var MainView = Backbone.View.extend({
    	el: $('#content'),
    	initialize: function() {
    		var LoginStatus = Backbone.Collection.extend({
    			url: "/auth/status"
    		});
    		// initialize instances
    		this.loginStatus = new LoginStatus();
    		this.userCollection = new UserCollection();
    		
    		// initialize event bindings
    		this.loginStatus.bind('reset', this.checkLoginStatus, this);
    		this.userCollection.bind('reset', this.render, this);
    		
    		// initialize and render default template
    		this.template = loginTemplate;
    		this.realRender();
    	},
    	events: {
    		"click #login_button"	: "attemptLogin"
    	},
    	checkLoginStatus: function() {
    		var that = this;
    		// check login status
    		var response = this.loginStatus.toJSON(); 
			if(response.shift().status) {
				this.template = homeTemplate;
				this.realRender();
			}
    	},
    	attemptLogin: function() {
    		console.log('attempting to login');
			var that = this;
			FB.login(function(response) {
				if (response.authResponse) {
					console.log('user is now connected to Facebook');
					// login user to system
					that.userCollection.fetch();
					// redirect to home
				} else {
					console.log('login failed');
				}
			});
    	},
    	render: function() {
    		console.log('rendering MainView');
			// get login status from server
			this.loginStatus.fetch();
    	},
    	realRender: function() {
			var compiledTemplate = _.template(this.template);
    		this.$el.html(compiledTemplate);
		}
  	});
  	return MainView;
});
