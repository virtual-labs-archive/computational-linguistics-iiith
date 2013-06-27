<?php
$target_path="uploads/";
$target_path=$target_path.basename($_FILES['uploadedfile']['name']);;
$myfile= $_FILES['uploadedfile']['tmp_name'];
$fh=fopen($myfile,'r');
$theData="";
$wordCount=array();
$index=array();
$COUNT=0;
while(!feof($fh)){
	$theData = fgets($fh);
	$words=preg_split("/[:\s,]+/",$theData);
	for($i=0;$i<count($words);$i=$i+1){
		if($words[$i]!=""){
			$COUNT+=1;
			if(array_key_exists($words[$i],$wordCount)){
				$wordCount[$words[$i]]+=1;
			}
			else{
				$wordCount[$words[$i]]=1;
			}
		}
	}
}
fclose($fh);
print_r($wordCount);
echo "<br>";
echo $COUNT;
echo "<br>";
foreach($wordCount as $key => $val){
	if(array_key_exists($val,$index)){
		$index[$val]=$index[$val]." ".$key;
	}
	else{
		$index[$val]=$key;
	}
}
print_r($index);
?>
