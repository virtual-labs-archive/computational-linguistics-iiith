<html>
<head>
<script class='gtm'>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-W59SWTR');</script>

<script>


function selectSize()
{
var tokens = document.getElementById("corp_size");
theIndx=tokens.selectedIndex;
tok_id=tokens.options[theIndx].value;
alert(tok_id);
id=tok_id.split("*");

if(tok_id=="-1")
	{
		alert("Select the number of tokens");
		return;
	}
var tno=parseFloat(id[2]);
var cno=parseFloat(id[1]);
var lno=parseFloat(id[0]);

$('#display').load('CLExperiment4-2.php?ind='+tno+'&corp='+cno+'&lang='+lno);



}
</script>

</head>
<body>

<div id="mainContainer" align="center">
<br/>
<?php

$corp_opt=$_GET["ind"];
$corp_opt=floatval($corp_opt);
$corp_opt++;
$lang_opt=$_GET["lang"];
if(strcmp($lang_opt, "1")==0)
   $dir_path="Exp4/English/Corpus ".$corp_opt."/";
else
   $dir_path="Exp4/Hindi/Corpus ".$corp_opt."/";

$lang_opt=floatval($lang_opt);

$files = glob($dir_path . "*");
?>

<form name = "selector" action="javascript:selectSize()" target="_parent" method="post" onsubmit="selectSize()">
<select name="corp_size" id="corp_size" >;
     <option value="-1" select="selected">---Select the number of tokens---</option>;

<?php

$file_id=1;
//print each file name
foreach($files as $file)
{
 
       $file=explode("/", $file);
       echo $file[3];
       $file=explode(".", $file[3]);
       echo "<option value=\"".$lang_opt."*".$corp_opt."*".$file_id."\">".$file[0]."</option>";
       $file_id++;
    
}
echo "</select><br/><br/>";
echo "<input type=\"submit\" value=\"Generate Tokens vs. Types Graph\"></form>";
?>

<div id="display"></div>
</body>
</html>
