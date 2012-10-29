// Filename: HeaderView.js
define([
  	'jquery',
  	'underscore',
  	'backbone',
  	'text!templates/header.html'
], function($, _, Backbone, headerTemplate){
  	var HeaderView = Backbone.View.extend({
    	el: $('#header'),
    	
    	render: function(route, action) {
    		var data = {};
    		if(typeof route == "undefined") {
    			route = "";
    		}
    		// display different types of header
    		switch(route) {
    			case "":
					this.$el.empty();
    				break;
    			case "login":
    				this.$el.empty();
    				break;
				default:
    				data = {
						left_button: "Back",
						left_button_href: "javascript:window.history.back()",
		    			right_button: "Add",
		    			right_button_href: "#/transaction/add",
		    			page_title: route,
		    			page_title_href: "/",
					};
					this.realRender(data);
					break;
    		}
    	},
    	realRender: function(data) {
    		console.log('rendering HeaderView');
    		var compiledTemplate = _.template(headerTemplate, data);
    		this.$el.html(compiledTemplate);
    	}
  	});

  	return HeaderView;
});