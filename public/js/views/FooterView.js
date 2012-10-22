// Filename: FooterView.js
define([
  	'jquery',
  	'underscore',
  	'backbone',
  	'text!templates/footer.html'
], function($, _, Backbone, footerTemplate){
  	var FooterView = Backbone.View.extend({
    	el: $('#footer'),
    	render: function() {
    		console.log('rendering FooterView');
    		var compiledTemplate = _.template(footerTemplate);
    		this.$el.html(compiledTemplate);
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