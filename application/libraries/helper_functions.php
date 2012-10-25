<?php

	function print_rf($data)
	{
		echo '<pre>';
		print_r($data);
		echo '</pre>';    
	}
	
	function get_date_today()
	{
		return date("Y-m-d H:i:s");
	}
	
	function get_date_2_months()
	{
		return date("Y-m-d H:i:s", strtotime('+60 days'));
	}
	
	function object_merge($object1, $object2)
	{
		return (object)array_merge( (array)$object1, (array)$object2 );
	}

?>
