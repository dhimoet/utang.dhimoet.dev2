<?php

class Auth_Controller extends Base_Controller {

	public $restful = true;
	
	public function __construct()
	{
		// make sure to fire the class constructor
		new Facebook;
	}
	
	public function get_status()
	{
		return Response::json(array('status' => Auth::check()));
	}
	
	public function get_login()
	{
		$fb_uid = Facebook::get_user_id();
		// check if user is logged in on facebook
		if($fb_uid) {
			// if yes - log the user in
			$user_id = User::get_user_id_by_fb_uid($fb_uid);
			$user = User::find($user_id);
			// creating a response object
			$response = new User;
			$response->id = $user->id;
			$response->username = $user->username;
			$response->email = $user->email;
			$response->facebook_user_id = $user->facebook_user_id;
			// login user to system
			Auth::login($user_id);
			// backbone only receive array response
			return Response::json($response->to_array());
		}
		else {
			// return boolean false
			return Response::json(array('status' => Auth::check()));
		}
	}
	
	
	public function get_logout()
	{
		// logout from facebook
		// clear session
		$fb_uid = Facebook::get_user_id();
		$logout_url = 'logged out';
		// check if user is logged in on facebook
		if($fb_uid) {
			// if yes - log the user in
			$logout_url = Facebook::get_logout_url();
			$user_id = User::get_user_id_by_fb_uid($fb_uid);
			Auth::logout($user_id);
		}
		elseif(Auth::check()) {
			Auth::logout(Auth::user()->id);
		}
		// return either facebook logout url or a statement
		return Response::make($logout_url);
	}
}
