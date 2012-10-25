// Filename: LogoutView.js
define([
  	'jquery',
  	'underscore',
  	'backbone',
  	'collections/FacebookUrlCollection'
], function($, _, Backbone, FacebookUrlCollection){
  	var LogoutView = Backbone.View.extend({
    	el: $('#content'),
    	render: function() {
    		
    	},
    	events: {
    		"click button"	: "getFacebookUrl"
    	},
    	getFacebookUrl: function() {
    		// get facebook logout url
    		$.ajax({
    			url: "/auth/logout",
    			success: function(response) {
    				if(response != 'logged in') {
    					window.location.href = response;
    				}
    			}
    		});
    	},

  	});

  	return LogoutView;
});