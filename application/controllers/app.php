<?php

class App_Controller extends Base_Controller {

	public function action_index()
	{
		// display the app
		return View::make('app.index');
	}
}