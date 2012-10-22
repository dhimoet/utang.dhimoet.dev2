// Filename: HeaderView.js
define([
  	'jquery',
  	'underscore',
  	'backbone',
  	'text!templates/header.html'
], function($, _, Backbone, headerTemplate){
  	var HeaderView = Backbone.View.extend({
    	el: $('#header'),
    	render: function(data) {
    		console.log('rendering HeaderView');
    		var compiledTemplate = _.template(headerTemplate, data);
    		this.$el.html(compiledTemplate);
    	},
    	renderHome: function() {
    		var data = {
				left_button: "Back",
				left_button_href: "javascript:window.history.back()",
    			right_button: "Add",
    			right_button_href: "#/transaction/add",
    			page_title: "Home",
    			page_title_href: "/",
			}
			this.render(data);
    	}
  	});

  	return HeaderView;
});