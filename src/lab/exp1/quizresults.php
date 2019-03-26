<?php


$total=0;

$Q1 = $_POST['Q1'];
$Q2 = $_POST['Q2'];

echo "You answered the following questions correctly : ";
if ($Q1==2)
{
				$total=$total+1;
						echo "1 ";
}
if ($Q2==5)
{
				$total=$total+1;
						echo "2 ";
}
echo "\n\n\n\n";
echo "<html>
<head></head>";
echo "<body class=\"page_bg\">";

echo "<br>Total number of correct answers : ".$total."/2";
echo "</body></html>";
?>
