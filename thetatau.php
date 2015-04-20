<html>
<head>
<title>Claire Li - Theta Tau Application</title>
<link rel="stylesheet" type="text/css" href="claire.css">
<link href='http://fonts.googleapis.com/css?family=Satisfy' rel='stylesheet' type='text/css'>
</head>
<body>
<div align="center">
<h1>Claire Li - Instagram Theta Tau Generator</h1><p>



<?php
	echo "<style>".file_get_contents('claire.css')."</style>";
  function fetchData($url){
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_TIMEOUT, 20);
  $result = curl_exec($ch);
  curl_close($ch); 
  return $result;
  }
  $search=$_POST['search'];
  echo "Your search term was, ".$search."<p>";
  echo "<a href='index.html'>Generate another search</a><p>";

  $search_url="https://api.instagram.com/v1/tags/".$search."/media/recent?access_token=974819981.1677ed0.01f6bb210fe24877a3f8691a36fe88b5";
  //echo $search_url;
	$json =file_get_contents($search_url);
	$data = json_decode($json);
	
	$images = array();
	foreach( $data->data as $user_data ) {
		$images[] = (array) $user_data->images;
	}
	
	$standard = array_map( function( $item ) {
		return $item['standard_resolution']->url;
	}, $images );
	$x=0;
	foreach( $standard as $url ) {
		if($x==4){
			echo "<img src=\"$url\" width='200px' height='200px'>";
			echo "<br>";
			$x=-1;
		}
		else{
			echo "<img src=\"$url\" width='200px' height='200px'>";
		}
		$x++;
	}
?>


</div>
</body>
</html>