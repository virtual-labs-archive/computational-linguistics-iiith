<html>
<head>
</head>
<body>
<?php
$possible_sent=str_replace(",","\t",$_GET['possible_sent']);
$possible_sent=str_replace("-"," ",$possible_sent);
$possible_sent=explode("\t",$possible_sent);

for($i=0;$i<count($possible_sent);$i++)
	echo trim($possible_sent[$i])."<br/>";
?>
</body>
</html>
