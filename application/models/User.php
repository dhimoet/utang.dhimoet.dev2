<?
class User extends Eloquent 
{
	public static $table = 'users';
	public static $timestamps = true;

	/**
	 *	@param int user id
	 *	@return object facebook user id
	 */
	public static function get_facebook_uid($user_id) 
	{
		$user = parent::find($user_id);
		return $user->facebook_user_id;
	}
	
	/**
	 *	@param string keyword
	 * 	@param string all/friends/not-friends
	 *	@return string facebook user id
	 */
	public static function get_users_by_keyword($keyword = '', $limit = 'all')
	{
		
	}
	
	/**
	 *	@param string email
	 *	@return int user id
	 */
	public static function get_user_id_by_email($email)
	{
		$user = parent::where_email($email)->first();
		return $user->id;
	}
	
	/**
	 *	@param int facebook user id
	 *	@return int user id
	 */
	public static function get_user_id_by_fb_uid($fb_uid)
	{
		$user = parent::where('facebook_user_id', '=', $fb_uid)->first();
		return $user->id;
	}
	
	/**
	 *	@param int user id
	 *	@return string user name
	 */
	public static function get_user_name($user_id)
	{
		$user = parent::find($user_id);
		return $user->username;
	}
}

?>
