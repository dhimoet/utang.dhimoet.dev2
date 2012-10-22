// Filename: HomeView.js
define([
  	'jquery',
  	'underscore',
  	'backbone',
  	'text!templates/home.html'
], function($, _, Backbone, homeTemplate){
  	var HomeView = Backbone.View.extend({
    	el: $('#content'),
    	render: function() {
    		console.log('rendering HomeView');
    		var compiledTemplate = _.template(homeTemplate);
    		this.$el.html(compiledTemplate);
    	},
    	events: {
    		
    	}
  	});

  	return HomeView;
});