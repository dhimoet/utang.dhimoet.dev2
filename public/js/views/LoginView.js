// Filename: LoginView.js
define([
  	'jquery',
  	'underscore',
  	'backbone',
  	'collections/FacebookUrlCollection',
  	'text!templates/login.html'
], function($, _, Backbone, FacebookUrlCollection, loginTemplate){
  	var LoginView = Backbone.View.extend({
    	el: $('#content'),
    	render: function() {
    		console.log('rendering LoginView');
    		var compiledTemplate = _.template(loginTemplate);
    		this.$el.html(compiledTemplate);
    	},
    	events: {
    		"click button"	: "getFacebookUrl"
    	},
    	getFacebookUrl: function() {
    		// get facebook login url
    		$.ajax({
    			url: "/auth/login",
    			success: function(response) {
    				if(response != 'logged in') {
    					window.location.href = response;
    				}
    			}
    		});
    	},

  	});

  	return LoginView;
});