<?php

$lang=$_POST['lang'];
$word=$_POST['word'];
$pos_tag=$_POST['pos'];
$mean=$_POST['mean'];
$map=$_POST['map'];
$mapping=split(",",$map);

$num=0;
if($mapping[0]!=""){
	$num=count($mapping);
}

$pos=array();
$meaning=array();

$filename = "../exp7-corpus/".$lang."/words/".$word;
$file = fopen($filename, "r") or exit("Unable to open file!");


// Reading file content and appending to pos and meaning array.
while(!feof($file))
{
	$pos[]=trim(fgets($file));
	$meaning[]=trim(fgets($file));
	fgets($file);
}

$key = array_search($mean, $meaning);
if($num>0 && in_array($key,$mapping)){
	echo "-2";
}
else if($pos_tag==$pos[$key]){
	$id++;	
	echo $key;
}
else if($pos_tag!=$pos[$key]){
	echo "-1";
}
?>
