<?php
require_once "application/libraries/facebook/fb.php";

class Facebook {
	
	protected static $facebook = array();
	
	public function __construct() 
	{
		return $this->initialize();
	}
	
    public static function initialize() 
    {
		static::$facebook = new Fb(array(
			'appId'  => FACEBOOK_APP_ID,
			'secret' => FACEBOOK_SECRET,
			'cookie' => true
		));
    }

	public static function login($user_id, $prompt = false)
	{
		// get user facebook token data from database
		$uft = UserFacebookToken::where('user_id', '=', $user_id)->first();
		// check if user has an access token stored in database
		if(!empty($uft)
				&& ($uft->access_token && $uft->access_token != '')) {
			// user has the token
			// check if the token is valid
			if($uft->expires_at > get_date_today()) {
				// token is valid
				// use the token
				static::set_access_token($uft->access_token);
			}
			elseif($prompt) {
				// token is expired
				// login user to facebook
				return Redirect::to(Facebook::get_login_url());
			}
		}
		elseif($prompt) {
			// user does not have the token
			// login user to facebook
			return Redirect::to(Facebook::get_login_url());
		}
		// done
		return true;
	}
	
	public static function post_login($user_id, $prompt = false)
	{
		// get user data
		$user = User::find($user_id);
		// get user facebook token data from database
		$uft = UserFacebookToken::where('user_id', '=', $user_id)->first();
		// check if user has a facebook uid stored in database
		if($user->facebook_uid && $user->facebook_uid != '') {
			// user has the uid
		}
		elseif($prompt) {
			// user does not have the uid
			// store the uid to database
			$user->facebook_uid = static::get_user_id();
			$user->save();
		}
		// check if user has an access token stored in database
		if(!empty($uft)
				&& ($uft->access_token && $uft->access_token != '')) {
			// user has the token
			// done
		}
		elseif($prompt) {
			// user does not have the token
			// store the new token to database
			$uft = new UserFacebookToken;
			$uft->user_id = $user_id;
			$uft->access_token = static::get_access_token();
			$uft->expires_at = get_date_2_months();
			$uft->save();
		}
		// done
	}
	
	public static function get_user_id()
	{
		// Get User ID
		$user = static::$facebook->getUser(); // what's wrong with this??
		// Proceed knowing you have a logged in user who's authenticated.
		if ($user) {
			try {
				$user_profile = static::$facebook->api('/me');
			} 
			catch (FacebookApiException $e) {
				error_log($e);
				$user = 0;
			}
		}
		
		return $user;
	}
	
	public static function get_login_url()
	{
		// Specify permissions
		$params = array(
			'scope' => 'user_status,user_photos,user_videos,user_events,publish_actions,publish_stream'
		);
		$loginUrl = static::$facebook->getLoginUrl($params);
		
		return $loginUrl;
	}
	
	public static function get_logout_url()
	{
		$logoutUrl = static::$facebook->getLogoutUrl();
		
		return $logoutUrl;
	}
	
	public static function get_access_token()
	{
		$token = static::$facebook->getAccessToken();
		
		return $token;
	}
	
	public static function set_access_token($token)
	{
		static::$facebook->setAccessToken($token);
		// set long-lived access token
		static::$facebook->setExtendedAccessToken();
	}
	
	public static function destroy_session()
	{
		static::$facebook->destroySession();
	}
	
	public static function api($args)
	{
		$response = static::$facebook->api($args);
		
		return $response;
	}
	
	public static function get_albums($user_id = 'me', $token)
	{
		$args = "/{$user_id}/albums?access_token={$token}";
		$response = static::$facebook->api($args);
		
		return array_shift($response);
	}
	
	public static function get_photos($album_id, $token)
	{
		$args = "/{$album_id}/photos?access_token={$token}";
		$response = static::$facebook->api($args);
		
		return array_shift($response);
	}
	
	public static function get_videos($user_id = 'me', $token)
	{
		$args = "/{$user_id}/videos/uploaded?access_token={$token}";
		$response = static::$facebook->api($args);
		
		return array_shift($response);
	}
	
	public static function get_feed($user_id = 'me', $token)
	{
		$args = "/{$user_id}/feed?access_token={$token}";
		$response = static::$facebook->api($args);
		
		return array_shift($response);
	}
	
	public static function get_events($user_id = 'me', $token)
	{
		$args = "/{$user_id}/events?access_token={$token}";
		$response = static::$facebook->api($args);
		
		return array_shift($response);
	}
}
