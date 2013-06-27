<?php

$i=$_GET['i'];
$ans=$_GET['ans'];
$lang=$_GET['lang'];
$word=$_GET['word'];
$sentence=array();
$answer=array();

$filename = "../exp7-corpus/".$lang."/assignment/".$word;
$file = fopen($filename, "r") or exit("Unable to open file!");


// Reading file content and appending to pos and meaning array.
while(!feof($file))
{
	$answer[]=trim(fgets($file));
	$sentence[]=trim(fgets($file));
	fgets($file);
}
if($answer[$i-1]==($ans+1)){
echo "1";
}
else{
echo "0";
}
fclose($file);


?>
