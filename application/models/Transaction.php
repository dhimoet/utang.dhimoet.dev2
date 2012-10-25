<?
class Transaction extends Eloquent 
{
	public static $table = 'transactions';
	public static $timestamps = true;

	/**
	 *	@param int user id
	 *	@return object facebook user id
	 */
	public static function get_facebook_uid($user_id) 
	{
	}
}
		