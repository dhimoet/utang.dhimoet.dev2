// Filename: FooterView.js
define([
  	'jquery',
  	'underscore',
  	'backbone',
  	'text!templates/footer.html'
], function($, _, Backbone, footerTemplate){
  	var FooterView = Backbone.View.extend({
    	el: $('#footer'),
    	initialize: function() {
    		
    	},
    	render: function(route) {
    		console.log('rendering FooterView');
    		if(typeof route == "undefined") {
    			route = "";
    		}
    		var compiledTemplate = _.template(footerTemplate);
    		// display different types of footer
    		switch(route) {
    			case "":
					this.$el.empty();
    				break;
    			case "login":
					this.$el.empty();
    				break;
				default:
					if(this.$el.html() == '') {
						this.$el.html(compiledTemplate);
					}
					break;
    		}
    	},
    	events: {
    		"click li>a"	: "onFooterClick"
    	},
    	onFooterClick: function(e) {
    		var curr = $(e.currentTarget);
    		$('li').removeClass('active');
    		curr.parent().addClass('active');
    	}
  	});

  	return FooterView;
});