<?php

class Home_Controller extends Base_Controller {

	public $restful = true;
	
	public function get_home()
	{
		// get all friends' name
		$users = UserRelationship::is_friend(11);
		// get all transactions with each friend
		// calculate the total amount of all transactions with each friend 
		// get the last transaction with each friend
		
		return Response::json($users);
	}
}