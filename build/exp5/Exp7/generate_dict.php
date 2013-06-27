<?php

if(isset($_POST['id'])){
	$id=$_POST['id'];
}
else{
	$id=1;
}

$map=$_POST['map'];
$mapping=split(",",$map);
$num=0;
if($mapping[0]==""){
	$num=0;
}
else{
	$num=count($mapping);
}

$lang=$_POST['lang'];
$word=$_POST['word'];
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

$i=1;

while($i<=$num){

	echo '<table width="50%">';
	echo "<tr>";
	echo '<td >';
	echo "POS";
	echo "</td>";
	echo '<td >';
	echo "<input type='text' value='".$pos[$mapping[$i-1]]."' readonly>";
	echo "</td>";
	echo "</tr>";
	echo "<tr>";
	echo '<td >';
	echo "Meaning";
	echo "</td>";
	echo '<td >';
	echo "<input type='text' value='".$meaning[$mapping[$i-1]]."' readonly>";
	echo "</td>";
	echo "</tr>";

	echo "<tr>";
	echo '<td >';
	echo "sense id";
	echo "</td>";
	echo '<td >';
	echo $i;
	echo "</td>";
	echo "</tr>";
	echo "</table>";

	$i++;
}

if($num<count($pos)){
	echo '<table width="50%">';
	echo "<tr>";
	echo '<td >';
	echo "POS";
	echo "</td>";
	echo '<td >';
	echo '<select id="pos_'.$id.'" autocomplete="off">';
	echo '<option value="null">---Select POS---</option>';
	echo '<option value="noun">Noun</option>';
	echo '<option value="verb">Verb</option>';
	echo '<option value="adj">Adjective</option>';
	echo '<option value="adv">Adverb</option>';
	echo '</select>';

	echo "</td>";
	echo "</tr>";
	echo "<tr>";
	echo '<td >';
	echo "Meaning";
	echo "</td>";
	echo '<td >';
	echo '<select id="mean_'.$id.'" autocomplete="off">';
	echo "<option value='-1'>---Select Meaning---</option>";
	for($j=0;$j<count($meaning);$j++){
		echo "<option value=".$j.">".$meaning[$j]."</option>";
	}

	echo '</select>';
	echo "</td>";
	echo "</tr>";

	echo "<tr>";
	echo '<td >';
	echo "sense id";
	echo "</td>";
	echo '<td >';
	echo $id;
	echo "</td>";
	echo "</tr>";
	echo "</table>";
}

if($num==count($pos)-1){
	echo '<button type="button" onclick=check(\''.trim($word).'\')>Submit</button>';	
	echo "<br>";
}
else if($num<count($pos)){
	echo '<button type="button" onclick=check(\''.trim($word).'\')>Next</button>';	
	echo "<br>";
}
if($num==count($pos)){
echo '<script type="text/javascript">';
echo "alert('Dictionary completed !! ')";
echo "</script>";
echo "<br><br>";
echo '<button type="button" onclick="loadAssign()">Start Assignment</button>';
}
fclose($file);


?>
