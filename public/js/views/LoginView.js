// Filename: LoginView.js
define([
  	'jquery',
  	'underscore',
  	'backbone',
  	'text!templates/login.html'
], function($, _, Backbone, loginTemplate){
  	var LoginView = Backbone.View.extend({
    	el: $('#content'),
    	render: function() {
    		console.log('rendering LoginView');
			var compiledTemplate = _.template(loginTemplate);
    		this.$el.html(compiledTemplate);
		},
		/**
		 * 	Event handlers
		 */
		events: {
			"click #login_button"	: "loginButtonClicked"
		},
		loginButtonClicked: function() {
			console.log('attempting to login');
			FB.login(function(response) {
		        if (response.authResponse) {
		            console.log('logged in succesfully');
		            window.location.href = "/";
		        } else {
		            console.log('login attempt failed');
		        }
		    });
		}
  	});
  	return LoginView;
});
