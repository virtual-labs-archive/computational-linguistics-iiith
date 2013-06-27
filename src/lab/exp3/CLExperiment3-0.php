<html>
<head>
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
      $file=explode(".",$file[4]);
      echo "<option value=\"".$lang_opt."*".$file_id."\">".$file[0]."</option>";
      $file_id++;
    }

echo "</select>";
?>

</form>
<div id=opt></div> </div>

</body>
</html>
