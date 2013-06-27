<?php


$nodes=$_GET['nodes'];
$numWords=$_GET['numwords'];

$words=split(",",$nodes);
echo "<span>";

for($i=0;$i<$numWords;$i++){
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
