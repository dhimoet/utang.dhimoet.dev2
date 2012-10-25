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
		return Response::json(Auth::check());
	}
	
	public function get_login()
	{
		$fb_uid = Facebook::get_user_id();
		// check if user is logged in on facebook
		if($fb_uid) {
			// if yes - log the user in
			$user_id = User::get_user_id_by_fb_uid($fb_uid);
			Auth::login($user_id);
			
			return 'logged in';
		}
		else {
			// if no - get login url
			return Facebook::get_login_url();
		}
	}
	
	public function get_logout()
	{
		$fb_uid = Facebook::get_user_id();
		// check if user is logged in on facebook
		if($fb_uid) {
			// if yes - get the logout url
			Auth::logout();
			return Facebook::get_logout_url();
		}
		else {
			// if no
			return 'logged out';
		}
	}
	
	public function post_logout()
	{
		// logout from facebook
		// clear session
		// redirect to login page
	}
}