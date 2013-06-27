<html>
<head>
<script>
</script>

</head>
<body>

<div id="mainContainer" align="center">
<br/>
<?php

$tok_opt=$_GET["ind"];
//$tok_opt=floatval($tok_opt);
$lang_opt=$_GET["lang"];
//$lang_opt=floatval($lang_opt);

if(strcmp($lang_opt, "1")==0)
   $image_path="Exp4/English/".$tok_opt.".jpg";
else
   $image_path="Exp4/Hindi/".$tok_opt.".jpg";

echo "<img src=\"$image_path\" title=\"graph\" alt=\"Error\" />";  

?>
</div>
</body>
</html>
