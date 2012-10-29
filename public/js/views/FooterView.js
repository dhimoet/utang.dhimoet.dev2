// Filename: FooterView.js
define([
  	'jquery',
  	'underscore',
  	'backbone',
  	'text!templates/footer.html'
], function($, _, Backbone, footerTemplate){
  	var FooterView = Backbone.View.extend({
    	el: $('#footer'),
    	render: function(route) {
    		console.log('rendering FooterView');
    		var compiledTemplate = _.template(footerTemplate);
    		// display different types of footer
    		switch(route) {
    			case "login":
    				this.$el.remove()
    				break;
				default:
					this.$el.html(compiledTemplate);
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