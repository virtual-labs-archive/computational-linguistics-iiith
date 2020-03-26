<html>
<head>
<script class='gtm'>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-W59SWTR');</script>

<script type="text/javascript" src='jquery.js'></script>
<script type="text/javascript">

function getOption(lang){
	if(lang=="null")
	{
		alert("Select language");
		return;
	}
	$('#words_sentence').load('CLexp2.php?lang='+lang+'&words_selected=%&words=%&possible_sent=%&turn=0&position=%');
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
