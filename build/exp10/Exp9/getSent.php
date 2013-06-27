<?php

$index=$_GET['i'];

$sentence=array();
$sentence1=array();

$filename = "../exp9-corpus/sentence";
$file = fopen($filename, "r") or exit("Unable to open file!");


// Reading file content and appending to pos and meaning array.
while(!feof($file))
{
	$line=trim(fgets($file));
	if($line!=""){
		$sentence[]=$line;
	}
}

$filename1 = "../exp9-corpus/dependency";
$file1 = fopen($filename1, "r") or exit("Unable to open file!");
while(!feof($file1))
{
	$line=trim(fgets($file1));
	if($line!=""){
		$sentence1[]=$line;
	}
}

$pos=array();
$filename2 = "../exp9-corpus/".$index;
$file2 = fopen($filename2, "r") or exit("Unable to open file!");
while(!feof($file2))
{
	$line=trim(fgets($file2));
	$temp=split(" ",$line);
	$pos[]=$temp[1];
}
$sel_sent=$sentence[$index-1];
$words=split(" ",$sel_sent);

$sel_sent1=$sentence1[$index-1];
echo count($words)."::".$sel_sent1."::";
for($k=0;$k<count($words)-1;$k++){
	echo $words[$k].":";
}
echo $words[$k]."::";


for($k=0;$k<count($words)-1;$k++){
	echo $pos[$k].":";
}
echo $pos[$k]."::";
echo '<span style="font-weight:bold;font-size:14px">Sentence: </span><i><span style="color:blue;font-weight:bold;font-size:14px">'.$sentence[$index-1].'</span></i>';

echo "<br/><br/>";
echo "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
echo "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
echo "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
echo "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
echo "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
echo "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
echo "::";
echo "<span>";

for($i=0;$i<count($words);$i++){
         if(strlen($words[$i])!=0)
         {
                 echo "<button id='but_".($i)."' onclick='changeColor(".$i.")'>".$words[$i]."</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
         }
}
echo "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
echo '<select id="chunk" autocomplete="off">';
echo '<option value="null">---Select Chunk name---</option>';
echo '<option value="S">S</option>';
echo '<option value="NP">NP</option>';
echo '<option value="VP">VP</option>';
echo '<option value="PP">PP</option>';
echo "<select>";

echo "</span>";
echo "<br/><br/>";

echo "<button id='submitbut' onclick='merge()'>Submit</button>";
fclose($file);

?>
