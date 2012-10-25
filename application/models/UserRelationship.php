<?
class UserRelationship extends Eloquent 
{
	public static $table = 'userrelationships';
	public static $timestamps = false;

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
	 *	user must be logged in
	 * 	@return object friends' ids
	 */
	public static function get_friends_ids()
	{
		// get current user's id
		$my_id = Auth::user()->id;
		// get user id's from the 2nd column of the table
		$friends_ids_right = parent::where('UserID1', '=', $my_id)
									->where('Type', '=', 'friend')
									->get();
		// get user id's from the 1st column of the table
		$friends_ids_left = parent::where('UserID2', '=', $my_id)
									->where('Type', '=', 'friend')
									->get();
		// merge objects
		$friends_ids = object_merge($friends_ids_right, $friends_ids_left);
		// return false if no objects found
		if(empty($friends_ids)) {
			return false;
		}
		return $friends_ids;
	}
	
	/**
	 *	user must be logged in
	 * 	@param int friend user id
	 * 	@return boolean
	 */
	public static function is_friend($friend_id)
	{
		// get current user's id
		$my_id = Auth::user()->id;
		// check where first column is current user and second column is user's friend
		$query = parent::where('UserID1', '=', $my_id)
							->where('UserID2', '=', $friend_id)
							->where('Type', '=', 'friend')
							->first();
		// return true if found
		if(!empty($query)) {
			return true;
		}
		// check where second column is current user and first column is user's friend
		$query = parent::where('UserID2', '=', $my_id)
							->where('UserID1', '=', $friend_id)
							->where('Type', '=', 'friend')
							->first();
		// return true if found
		if(!empty($query)) {
			return true;
		}
		return false;
	}
	
	/**
	 *	user must be logged in
	 * 	@param int first user id
	 * 	@param int second user id
	 * 	@param string type of relationship
	 * 	@param string status request
	 * 	@param int corresponding notification id
	 * 	@return boolean
	 */
	public static function set_relationship($id1, $id2, $type = 'friend_request', $status = 'active', $notification_id = 0)
	{
		// check for existing entry
		// query the first case
		$query = parent::where('UserID1', '=', $user_id1)
							->where('UserID2', '=', $user_id2)
							->where('Type', '=', $type)
							->first();
		// check if query returns a record
		if(empty($query)) {
			// if not - query the second case
			$query = parent::where('UserID2', '=', $user_id1)
								->where('UserID1', '=', $user_id2)
								->where('Type', '=', $type)
								->first();
		}
		// check if query returns a record
		if(empty($query)) {
			// if not - perform the relationship update
			// check what kind of update
			if($type == 'friend_request') {
				// if a friend request
				$ur = new UserRelationship;
				$ur->UserID1 = $user_id1;
				$ur->UserID2 = $user_id2;
				$ur->Type = $type;
				$ur->save();
			}
			else {
				// otherwise - perform first query
				$ur = parent::where('UserID1', '=', $user_id1)
								->where('UserID2','=', $user_id2)
								->first();
				// check if record existed
				if(empty($ur)) {
					// if not found - perform second query
					$ur = parent::where('UserID2', '=', $user_id1)
									->where('UserID1','=', $user_id2)
									->first();
				}
				$ur->Type = $type;
				$ur->save();
			}
			// check if current user has the first id
			if(Auth::user()->id == $id1) {
				// if yes - set $to to the second id
				$to = $id2;
			}
			else {
				// if no - set $to to the first id
				$to = $id1;
			}
			// create a notification
			$n = Notification::set_notification($to, $type, $status, $notification_id);
			
			return true;
		}
		// if yes - discard and return false
		return false;	
	}
}

?>
