// Filename: LoginView.js
define([
  	'jquery',
  	'underscore',
  	'backbone',
  	'collections/UserCollection',
  	'text!templates/login.html'
], function($, _, Backbone, UserCollection, loginTemplate){
  	var LoginView = Backbone.View.extend({
    	el: $('#content'),
    	initialize: function() {
			this.userCollection = new UserCollection();
			//this.userCollection.bind('reset', console.log(this.userCollection));
		},
    	render: function() {
    		console.log('rendering LoginView');
    		var compiledTemplate = _.template(loginTemplate);
    		this.$el.html(compiledTemplate);
    	},
    	events: {
    		"click button"	: "checkLoginStatus"
    	},
    	checkLoginStatus: function() {
			var that = this;
    		FB.getLoginStatus(function(response) {
				if (response.status === 'connected') {
					console.log('user is connected to Facebook');
				} 
				else if (response.status === 'not_authorized') {
					console.log('user has not authorized the app');
				} 
				else {
					console.log('user is not logged into Facebook');
					that.loginToFacebook();
				}
			});
    	},
    	loginToFacebook: function() {
			var user;
			var that = this;
			FB.login(function(response) {
				if (response.authResponse) {
					console.log('user is now connected to Facebook');
					// login user to system
					// redirect to home
				} else {
					console.log('login failed');
				}
			});
		},
		authorizeAppOnFacebook: function() {
			
		}
  	});

  	return LoginView;
});
