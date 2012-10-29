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
    		// initialize and render default template
    		this.template = loadingTemplate;
    	},
    	render: function(route, action, path) {
    		console.log('rendering MainView');
			var compiledTemplate = _.template(this.template);
    		this.$el.html(compiledTemplate);
    	}
  	});
  	return MainView;
});
