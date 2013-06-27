<html>
<head>
<script type="text/javascript" src='jquery.js'></script>
<script type="text/javascript">

function getOption(lang){
	if(lang=="null")
	{
		alert("Select language");
		return;
	}
	$('#words_sentence').load('CLexp1.php?lang='+lang+'&words_selected=%&words=%&possible_sent=%&turn=0&position=%');
}

</script>
</head>
<body>
<div id="selectLanguage" style="text-align:center">
<select name="lang" autocomplete="off" onchange="getOption(this.value);">
<option value="null">---Select Language---</option>
<option value="english");'>English</option>
<option value="hindi");'>Hindi</option>
</select>
</div>
<br/><div align="center" id='words_sentence'></div>
</body>
</html>
