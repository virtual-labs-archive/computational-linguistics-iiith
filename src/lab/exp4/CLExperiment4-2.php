<html>
<head>
<script class='gtm'>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-W59SWTR');</script>

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
