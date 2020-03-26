<html>
<head>
<script class='gtm'>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-W59SWTR');</script>

<script>


function selectCorpus()
{
var corp = document.getElementById("corp_opt");
theIndx=corp.selectedIndex;
corp_id=corp.options[theIndx].value;
if(corp_id=="-1")
	{
		alert("Select a corpus");
		return;
	}

id=corp_id.split("*");
var cno=parseFloat(id[1]);
var lno=parseFloat(id[0]);
$('#opt').load('CLExperiment3-1.php?ind='+cno+'&lang='+lno);

}
</script>

</head>
<body>

<div id="mainContainer" align="center">
<?php

$dir_path="Exp3/English/";
$files = glob($dir_path . "*"); ?>
<form name = "selector" action="javascript:selectCorpus()" target="_parent" method="post">
<select name="corp_opt" id="corp_opt" autocomplete="off" onchange="selectCorpus(this.value);">";
     <option value="-1" select="selected">---Select a corpus---</option>";

<?php

$file_id=0;
//print each file name
foreach($files as $file)
{
 
      $file=explode("/", $file);
      $file=explode(".",$file[2]);
      echo "<option value=\"".$lang_opt."*".$file_id."\">".$file[0]."</option>";
      $file_id++;
    }

echo "</select>";
?>

</form>
<div id=opt></div> </div>

</body>
</html>
