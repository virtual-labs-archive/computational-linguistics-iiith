<html>
<head>
<script class='gtm'>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-W59SWTR');</script>

<script>

function selectSize()
{
var tokens = document.getElementById("corp_size");
theIndx=tokens.selectedIndex;
tok_id=tokens.options[theIndx].value;
id=tok_id.split("*");

if(tok_id=="-1")
	{
		alert("Select the number of tokens");
		return;
	}
var tno=parseFloat(id[1]);
var lno=parseFloat(id[0]);
$('#display').load('CLExperiment4-2.php?ind='+tno+'&lang='+lno);

}
</script>

</head>
<body>

<div id="mainContainer" align="center">
<?php

$lang_opt=$_GET["ind"];
if(strcmp($lang_opt, "1")==0)
   $dir_path="Exp4/English/";
else
   $dir_path="Exp4/Hindi/";

$lang_opt=floatval($lang_opt);
$files = glob($dir_path . "*");
$u=0;
foreach($files as $file)
{
     $file=explode("/",$file);
     $file=explode(".", $file[2]);
     $file_list[$u]=$file[0];
     $u++;     
}
sort($file_list, SORT_NUMERIC);

?>

<form name = "selector" action="javascript:selectSize()" target="_parent" method="post" onsubmit="selectSize()">
<select name="corp_size" id="corp_size" autocomplete="off">;
     <option value="-1" select="selected">---Select Corpus size---</option>;

<?php


//print each file name
foreach($file_list as $file)
{
 
       
       echo "<option value=\"".$lang_opt."*".$file."\">".$file."</option>";
       
    
}
echo "</select><br/><br/>";

echo "<input type=\"submit\" value=\"Generate Tokens vs. Types Graph\"></form>";
?>

<div id="display"></div>

</body>
</html>
