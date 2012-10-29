// Filename: MainView.js
define([
  	'jquery',
  	'underscore',
  	'backbone',
  	'text!templates/loading.html',
  	'text!templates/home.html'
], function($, _, Backbone, loadingTemplate, homeTemplate){
  	var MainView = Backbone.View.extend({
    	el: $('#content'),
    	initialize: function() {
    		
    	},
    	render: function(route, action, path) {
    		console.log('rendering MainView');
    		// display different types of header
    		switch(route) {
    			case "home":
    				this.template = homeTemplate;
    				break;
				default:
					this.template = loadingTemplate;
					break;
    		}
			var compiledTemplate = _.template(this.template);
    		this.$el.html(compiledTemplate);
    	}
  	});
  	return MainView;
});
