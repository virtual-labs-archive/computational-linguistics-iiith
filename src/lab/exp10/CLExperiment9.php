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
--!>

<html>
<head>
<script type="text/javascript" src='jquery.js'></script>
<script type="text/javascript" src="js/base64.js"></script>
<script type="text/javascript" src="js/canvas2image.js"></script>
<script type="text/javascript" src="js/syntree.js"></script>


<script>

function drawTree(str){
	var img = go(str);
	$("#tree1").empty();
	document.getElementById("tree1").innerHTML='<p align="center"><span style="color:blue;font-weight:bold;font-size:14px" id="textlang"> Generated Tree: &nbsp</span></p><br>';
	$("#tree1").append(img);
}
function drawActualTree(str){
	var img = go(str);
	$("#tree2").empty();
	$("#tree2").append(img);
}
var buttonCount=new Array();
var i;
var actualTree;
var numWords;
var nodeid;
var input_words=new Array();
var nodes=new Array();
var pos=new Array();
var depnodes=new Array();
var dependency;

if (window.XMLHttpRequest)
{// code for IE7+, Firefox, Chrome, Opera, Safari
	xmlhttp=new XMLHttpRequest();
}
else
{// code for IE6, IE5
	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}

function printActualTree(){

		document.getElementById("cap2").innerHTML='<p align="center"><span style="color:green;font-weight:bold;font-size:17px"> Actual Tree: &nbsp</span></p>';
		document.getElementById("dep2").innerHTML='<p align="center"><span style="color:blue;font-weight:bold;font-size:16px"> Bracketing: &nbsp</span>'+actualTree;
	drawActualTree(actualTree);
}
function checkTree(){
	if(actualTree==dependency){
		document.getElementById("answer").innerHTML='<img src="images/right.png" style="height:50px;width:50px">';	
	}
	else{
		document.getElementById("answer").innerHTML='<img src="images/wrong.png" style="height:50px;width:50px">';
		document.getElementById("cap1").innerHTML='<p align="center"><span style="color:red;font-weight:bold;font-size:17px"> Your Tree: &nbsp</span></p>';
		printActualTree();
	}
}

function generateDep()
{
	var temp="[S ";
	for(var i=0;i<numWords;i++){
		var t=depnodes[i].split(" ");
		for(var j=0;j<t.length;j++){
			if(t[j][0]=='['){
				temp+=t[j]+" ";
				continue;
			}
			else if(t[j]=="]"){
				temp+=t[j];
			}
			else{
				for(var k=0;k<input_words.length;k++){
					if(t[j]==input_words[k]){
						temp+="["+pos[k]+" "+input_words[k]+"]";
					}
				}
			}
		}
	}
	temp+="]";
	return temp;

}

function getSentence(i)
{
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			var result = xmlhttp.responseText.split('::');
			numWords=result[0];
			actualTree=result[1];
			nodeid=numWords;
			var allnodes=result[2];
			nodes=allnodes.split(":");
			depnodes=allnodes.split(":");
			input_words=allnodes.split(":");
			var nodespos=result[3];
			pos=nodespos.split(":");
			dependency=generateDep();
			drawTree(dependency);		
			document.getElementById("dep").innerHTML='<p align="center"><span style="color:blue;font-weight:bold;font-size:16px" id="textlang"> Bracketing: &nbsp</span>'+dependency;
			document.getElementById("textsent").innerHTML=result[4];
			document.getElementById("word").innerHTML=result[5];
			for(i=0;i<numWords;i++)
				buttonCount[i]=0;
		}
	}
	xmlhttp.open("GET","Exp9/getSent.php?i="+i,true);
	xmlhttp.send();
}

function merge(){
	var it;
	var count=0;
	var adj=1;
	var start=-1;
	var set=new Array();
	var val=document.getElementById("chunk").value;
	for(it=0;it<numWords;it++){
		if(buttonCount[it]==1){
			if(start!=-1 && it>start+1){
				adj=0;
			}
			start=it;
			set[count]=it;
			count++;
		}
	}/*
	if(count<2){
		alert("Choose atleast two nodes"+count);
	}*/	
	if(adj==0){
		alert("Choose adjacent nodes");
	}	

	else if(val=="null"){
		alert("Select chunk name");
	}
	else{
		document.getElementById('sel_sent').disabled = true;
		nodeid=nodeid+1;
		var nodesval="";
		var depsval="";
		var tempdep="";
		for(var i=0;i<count-1;i++){
			nodesval+=nodes[set[i]]+" ";
			depsval+=depnodes[set[i]]+" ";
		}
		nodesval+=nodes[set[i]];
		depsval+=depnodes[set[i]];
		tempdep="["+val+" "+depsval+" ]";		

		nodes[set[0]]=nodesval;
		depnodes[set[0]]=tempdep;
		var j;
		numWords=numWords-set.length+1;
		for(j=set[0]+1;j<numWords;j++){
			nodes[j]=nodes[count+j-1];
			depnodes[j]=depnodes[count+j-1];
		}
		if(numWords>1){
			document.getElementById("word").innerHTML = "";
			dependency=generateDep();
			drawTree(dependency);		
		}
		else{
			checkTree();
		}
		document.getElementById("dep").innerHTML='<p align="center"><span style="color:blue;font-weight:bold;font-size:16px" id="textlang"> Bracketing: &nbsp</span>'+dependency;
		xmlhttp.onreadystatechange=function()
		{
			if (xmlhttp.readyState==4 && xmlhttp.status==200){
				document.getElementById("word").innerHTML=xmlhttp.responseText;
				for(i=0;i<numWords;i++)
					buttonCount[i]=0;
				if(numWords==1){
					document.getElementById("word").innerHTML="";
				}
			}
		}
		xmlhttp.open("GET","Exp9/merge.php?nodes="+nodes+"&numwords="+numWords,true);
		xmlhttp.send();
	}
}

function changeColor(i)
{
	var it;
	var flag=0;
	var fl=0;
	if(buttonCount[i]==0){
		buttonCount[i]=1;
		document.getElementById("but_"+i).style.background='#ff0000';
	}
	else{
		buttonCount[i]=0;
		document.getElementById("but_"+i).style.background='#ffffff';
	}
	for(it=0;it<numWords;it++){
		if(buttonCount[it]==0){
			fl=1;
			document.getElementById("but_"+it).disabled=true;
			if(it==0 && buttonCount[it+1]==1){
				document.getElementById("but_"+it).disabled=false;
				flag=1;
			}
			else if(it==numWords-1 && buttonCount[it-1]==1){
				document.getElementById("but_"+it).disabled=false;
				flag=1;
			} 
			else if(it>0 && it<numWords-1){
				if(buttonCount[it-1]==1 || buttonCount[it+1]==1 ){
					document.getElementById("but_"+it).disabled=false;
					flag=1;
				}
			}
		}
	}
	if(flag==0 && fl==1){
		for(it=0;it<numWords;it++){
			buttonCount[it]=0;
			document.getElementById("but_"+it).disabled=false;
		}	
	}
}

</script>
</head>
<body>
<p align="center"><span style="color:blue;font-weight:bold;font-size:14px" id="textlang"> Select a Sentence: &nbsp</span>
<select name="sel_sent" id="sel_sent" autocomplete="off" onchange="getSentence(this.value);">
<option value="null">---Select Sentence---</option>
<?php
$filename = "exp9-corpus/sentence";
$file = fopen($filename, "r") or exit("Unable to open file!");

$sentences=array();
// Reading file content and appending to pos and meaning array.
$i=1;
while(!feof($file))
{
	$line=trim(fgets($file));
	if($line!=""){
		echo '<option value="'.$i.'">Sentence '.$i.': '.$line.'</option>';
		$i++;
	}
}

?>
</select>
<br><br>
</p>
<div id="textsent" align="center"></div>
<div id="word" align="center"></div>
<div id="answer" align="center"></div>
<br><br>
<div id="cap1" align="center"></div><br>
<div id="dep" align="center"></div>
<br>
<div id="tree1" align="center"></div>
<br><br>
<div id="cap2" align="center"></div>
<div id="dep2" align="center"></div>
<br>
<div id="tree2" align="center"></div>
</body>
</html>
