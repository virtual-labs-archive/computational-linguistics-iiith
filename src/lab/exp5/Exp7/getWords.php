<?php
$lang=$_GET['lang'];
$files=array();
$dir = "../exp7-corpus/".$lang."/words";
$dh = opendir($dir);
while (($f= readdir($dh)) !== false) {
	//if(preg_match("/^[A-Za-z]+$/", $f)){
	if($f!="." and $f!="..")
		$files[]=$f;

	//}
}
closedir($dh);
echo '<p align="center"><span style="color:blue;font-weight:bold;font-size:14px" id="textword"> Select a '.$lang.' word: &nbsp</span>';
echo '<select name="dict" id="dropword" autocomplete="off" onchange="builtDictionary(this.value);">';
echo "<option value='null'>-- Select Word --</option>";
for($i=0;$i<count($files);$i++){
	echo "<option value=".$files[$i].">".$files[$i]."</option>";
}
echo "</select>";
echo "</p><br><br>";
?>
