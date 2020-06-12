<!--
This experiment aims at dictionary generation.
 - It works in for two languages, English and Hindi, but any number of languages can be added by supplying the corpus of that language in the folder "exp7-corpus.
 - We have taken 10 words from each language for now. More words can be added by adding a file with name as same as the word and having meanings of different senses in it. Refer to exp7-corpus/english/words/book for the word "book".
 
Implementation:
 - This page is the Experiment page of Experiment 7. It makes calls to following pages:
   - getWords.php: It returns all the words (filenames) present in the directory of that langugage.
   - generate_dict.php: It returns all the POS and Meaning of the selected word.
   - loadAssign.php: This file loads the assignment for the particular word.
   - check.php: It checks whether a particular dictionary entry is correct or not. 
   - eval.php: This code evaluates each submission of assignment.
-->


<html>
<head>
<script class='gtm'>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-W59SWTR');</script>

<script type="text/javascript" src='jquery.js'></script>
<script>

var language;
var words;
var id=0;
var xmlhttp;
var mapping=new Array();

if (window.XMLHttpRequest)
{// code for IE7+, Firefox, Chrome, Opera, Safari
	xmlhttp=new XMLHttpRequest();
}
else
{// code for IE6, IE5
	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
function getOption(lang)
{
	language=lang;
	document.getElementById("textlang").innerHTML="";
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("word").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","Exp7/getWords.php?lang="+lang,true);
	xmlhttp.send();
}

function builtDictionary(word)
{
	document.getElementById("textword").innerHTML="";
	words=word;
	id=id+1;
	$.ajax({
		url: "Exp7/generate_dict.php",	
		type: "POST",		
		data: "lang="+language+"&word="+word+"&id="+id+"&map="+mapping,	
		success: function (html) {	
			$('#dict').html(html);	
		}		
	});

	document.getElementById("lang").disabled=true;
}

function check(word)
{
	//check
	document.getElementById("dropword").disabled=true;
	var pos=document.getElementById("pos_"+id).value;
	var elt=document.getElementById("mean_"+id);
	var mean="";
	if (elt.selectedIndex != -1){
		mean=elt.options[elt.selectedIndex].text;
	}
	$.ajax({
		url: "Exp7/check.php",	
		type: "POST",		
		data: "lang="+language+"&word="+word+"&map="+mapping+"&pos="+pos+"&mean="+mean,	
		success: function (html) {	
			if(html>=0){
				mapping[id-1]=html;
				builtDictionary(word);
			}
			else if(html==-1){
				alert("POS and Meaning do not match");
			}
			else if(html==-2){
				alert("Dictionary Entry repeated");
			}
		}		
	});
}
function loadAssign()
{
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("assign").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","Exp7/loadAssign.php?lang="+language+"&word="+words,true);
	xmlhttp.send();
}
function eval(i){

	var ans=document.getElementById("text_"+i).value;
	var myans=mapping[ans-1];
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			if(xmlhttp.responseText==1){
				document.getElementById("ans_"+i).innerHTML='<img src="images/right.png" style="height:25px;width:25px">';
			}
			else{
				document.getElementById("ans_"+i).innerHTML='<img src="images/wrong.png" style="height:25px;width:25px">';
			}
		}
	}
	xmlhttp.open("GET","Exp7/eval.php?lang="+language+"&word="+words+"&ans="+myans+"&i="+i,true);
	xmlhttp.send();
}
</script>
</head>
<body onload="lang.reset();">
<p align="center"><span style="color:blue;font-weight:bold;font-size:14px" id="textlang"> Select Dictionary Language: &nbsp</span>
<select name="lang" id="lang" autocomplete="off" onchange="getOption(this.value);">
<option value="null">---Select Language---</option>
<option value="english">English</option>
<option value="hindi">Hindi</option>
</select>
<br><br>
</p>
<div id="word" align="center"></div>
<div id="dict" align="center"></div>
<div id="assign" align="center">
</div>
</body>
</html>
