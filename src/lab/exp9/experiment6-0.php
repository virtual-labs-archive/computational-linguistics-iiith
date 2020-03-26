<html>
<head>
<script class='gtm'>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-W59SWTR');</script>

<script>


function selectSentence()
{

var lno= document.selector.Language.value;
var sentence = document.getElementById("sentence_opt");
theIndx=sentence.selectedIndex;
sentence_id=sentence.options[theIndx].value;
if(sentence_id=="-1")
	{
		alert("Select a sentence");
		return;
	}
var sno=parseFloat(sentence_id);
$('#display').load('experiment6-1.php?ind='+sno+'&lang='+lno);
}
</script>

</head>
<body>

<div id="mainContainer" align="center">
<?php
$lang_opt=$_GET['ind'];
if(strcmp($lang_opt, "1")==0)
   $sentence_path="Exp6/Eng-Sen.txt";
else
   $sentence_path="Exp6/Hin-Sen.txt";
$f1 =  fopen($sentence_path, "r");
$buffer=fread($f1, filesize($sentence_path)); 
$sen=split("\n", $buffer);?>
<form name = "selector" action="javascript:selectSentence()" target="_parent" method="post">
<select name="sentence_opt" id="sentence_opt" onchange="selectSentence(this.value);">";
     <option value="-1" select="selected">---Select a sentence---</option>";
<?php
$sen_id=0;
foreach ($sen as &$x)
     {    $y=split("&",$x);
          if($y[0]!='')
          echo "<option value=\"".$sen_id."\">".$y[0]."</option>";
          $sen_id++;
     }

echo "</select>";
echo "<input type=\"hidden\" name=\"Language\" value=\"$lang_opt\">"; ?>

</form>
<div id=display></div> </div>

</body>
</html>
