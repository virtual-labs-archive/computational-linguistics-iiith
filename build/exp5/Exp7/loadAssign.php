<?php


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

$i=0;
echo '<table width="50%">';

while($i<count($answer)){
	echo "<tr>";
	echo '<td>';
	echo $sentence[$i];
	echo "</td>";
	echo '<td >';
	echo "<input type='text' id='text_".($i+1)."'>";
	echo "</td>";
	echo '<td>';
	echo "<button onclick='eval(".($i+1).")'>Submit</button>";
	echo "</td>";
	echo '<td align="center" id="ans_'.($i+1).'">';
	echo "</td>";
	echo "</tr>";

	$i++;
}
echo "</table>";

fclose($file);


?>
