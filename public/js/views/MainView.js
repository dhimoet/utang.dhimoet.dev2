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
    		this.loginStatus = new LoginStatus();
    		this.loginStatus.bind('reset', this.checkLoginStatus, this);
    		
    		this.userCollection = new UserCollection();
    		this.userCollection.bind('reset', this.render, this);
    		
    		this.template = loginTemplate;
    	},
    	render: function() {
    		console.log('rendering MainView');
			
			this.loginStatus.fetch();
			
    		var compiledTemplate = _.template(this.template);
    		this.$el.html(compiledTemplate);
    	},
    	events: {
    		"click #login_button"	: "performLogin"
    	},
    	checkLoginStatus: function() {
    		var that = this;
    		// check login status
    		var response = this.loginStatus.toJSON(); 
			if(response.shift().status) {
				this.template = homeTemplate;
				this.render();
			}
    	},
    	performLogin: function() {
    		console.log('logging in');
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
    	}
  	});
  	return MainView;
});