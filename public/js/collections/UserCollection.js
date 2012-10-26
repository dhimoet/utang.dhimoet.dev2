// Filename: collections/UserCollection
define([
	'underscore',
	'backbone',
	'models/UserModel'
], function(_, Backbone, UserModel){
	var UserCollection = Backbone.Collection.extend({
		model: UserModel,
		url: "/auth/login"
	});
	return UserCollection;
});
