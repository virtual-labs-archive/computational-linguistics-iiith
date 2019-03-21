<html>
<head>
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

$corp_opt = $_GET['ind'];
$corp_opt = floatval($corp_opt);
++$corp_opt;
$lang_opt = $_GET['lang'];
if (strcmp($lang_opt, '1') == 0) {
    $dir_path = 'Exp4/English/Corpus '.$corp_opt.'/';
}

$lang_opt = floatval($lang_opt);

$files = glob($dir_path.'*');
?>

<form name = "selector" action="javascript:selectSize()" target="_parent" method="post" onsubmit="selectSize()">
<select name="corp_size" id="corp_size" >;
     <option value="-1" select="selected">---Select the number of tokens---</option>;

<?php

$file_id = 1;
//print each file name
foreach ($files as $file) {
    $file = explode('/', $file);
    echo $file[3];
    $file = explode('.', $file[3]);
    echo '<option value="'.$lang_opt.'*'.$corp_opt.'*'.$file_id.'">'.$file[0].'</option>';
    ++$file_id;
}
echo '</select><br/><br/>';
echo '<input type="submit" value="Generate Tokens vs. Types Graph"></form>';
?>

<div id="display"></div>
</body>
</html>
