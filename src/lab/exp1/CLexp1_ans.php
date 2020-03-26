<html>
<head>
<script class='gtm'>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-W59SWTR');</script>

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
