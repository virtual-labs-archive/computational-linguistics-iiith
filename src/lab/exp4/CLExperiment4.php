<html>
<head>
<script>


function selectLang()
{

var lang = document.getElementById("lang_opt");
theIndx=lang.selectedIndex;
lang_id=lang.options[theIndx].value;
if(lang_id=="0")
	{
		alert("Select Language");
		return;
	}
var lno=parseFloat(lang_id);
$('#corpus_opt').load('CLExperiment4-0.php?ind='+lno);
}

</script>

</head>
<body>

<div id="mainContainer" align="center">
<?php 
echo '<form action="javascript:selectLang()" target="_parent" method="post">';
echo '<select name="lang_opt" id="lang_opt" autocomplete="off" onchange="selectLang(this.value);">';
          echo '<option value="0" select="selected">---Select Language---</option>';
          echo '<option value="1">English</option>';

echo '</select>'; ?>
<br/><br/> 
</form>
<div id=corpus_opt></div> </div>
</body>
</html>
