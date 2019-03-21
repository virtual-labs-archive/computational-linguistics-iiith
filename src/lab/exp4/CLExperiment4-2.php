<html>
<head>
<script>
</script>

</head>
<body>

<div id="mainContainer" align="center">
<br/>
<?php

$tok_opt = $_GET['ind'];
//$tok_opt=floatval($tok_opt);
$lang_opt = $_GET['lang'];
//$lang_opt=floatval($lang_opt);

   $image_path = 'Exp4/English/'.$tok_opt.'.jpg';

echo "<img src=\"$image_path\" title=\"graph\" alt=\"Error\" />";

?>
</div>
</body>
</html>
