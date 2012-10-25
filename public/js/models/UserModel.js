// Filename: models/UserModel
define([
  	'underscore',
  	'backbone',
], function(_, Backbone){
	var UserModel = Backbone.Model.extend({
		initialize: function() {
			console.log('processing UserModel');
		},
		defaults: {
			id					: "0",
			username			: "First Last",
			email				: "user@email.com",
			facebook_user_id	: "000"
		}
	});
	// Return the model for the module
	return UserModel;
});
