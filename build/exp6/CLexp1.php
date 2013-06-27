<html>
<head>
<style type="text/css">
.spmHandler {
   background: transparent;
   padding: 5px;
   border: 0px ;
}
</style>
<script type="text/javascript" src='jquery.js'></script>
<script type="text/javascript">

function select(word,selected_words,lang,list_words,possible_sent,turn,position,new_position)
{
	selected_words=selected_words.split("_");
	list_words=list_words.split("_");
	possible_sent=possible_sent.split("_");
	position=position.split("_");
	for(temp in list_words)
		if(list_words[temp].length==0)
			delete(list_words[temp]);
	for(temp in selected_words)
		if(selected_words[temp].length==0)
			delete(selected_words[temp]);
	for(temp in possible_sent)
		if(possible_sent[temp].length==0)
			delete(possible_sent[temp]);
	for(temp in position)
		if(position[temp].length==0 || new_position==position[temp])
			delete(position[temp]);
	cnt1=0;
	for(temp in list_words)
		if(word==list_words[temp])
			cnt1=cnt1+1;
	cnt2=0;
	for(temp in selected_words)
		if(word==selected_words[temp])
			cnt2=cnt2+1;
	if(cnt2<cnt1)
		selected_words.push(word);
	position.push(new_position);
	$('#words_sentence').load('CLexp1.php?lang='+lang+'&words_selected='+selected_words+'&words='+list_words+'&turn='+turn+'&possible_sent='+possible_sent+'&position='+position);
}

function check(selected_words,list_words,lang,turn,possible_sent,position)
{
	turn=turn+1;
	selected_words=selected_words.split("_");
	list_words=list_words.split("_");
	possible_sent=possible_sent.split("_");
	position=position.split("_");
	for(temp in list_words)
		if(list_words[temp].length==0)
			delete(list_words[temp]);
	for(temp in selected_words)
		if(selected_words[temp].length==0)
			delete(selected_words[temp]);
	for(temp in possible_sent)
		if(possible_sent[temp].length==0)
			delete(possible_sent[temp]);
	for(temp in position)
		if(position[temp].length==0)
			delete(position[temp]);
	$('#words_sentence').load('CLexp1.php?lang='+lang+'&words_selected='+selected_words+'&words='+list_words+'&turn='+turn+'&possible_sent='+possible_sent+'&position='+position);
}

function clears(list_words,lang,turn,possible_sent,position)
{
	list_words=list_words.split("_");
	possible_sent=possible_sent.split("_");
	position=position.split("_");
	for(temp in list_words)
		if(list_words[temp].length==0)
			delete(list_words[temp]);
	for(temp in possible_sent)
		if(possible_sent[temp].length==0)
			delete(possible_sent[temp]);
	for(temp in position)
		if(position[temp].length==0)
			delete(position[temp]);
	$('#words_sentence').load('CLexp1.php?lang='+lang+'&words_selected=%&words='+list_words+'&turn=0'+'&possible_sent='+possible_sent+'&position=%');
}

function getAnswer(possible_sent)
{
	possible_sent=possible_sent.split("_");
	for(temp in possible_sent)
		if(possible_sent[temp].length==0)
			delete(possible_sent[temp]);
	document.getElementById("get_hide").innerHTML="<button onclick=\"hideAnswer('"+possible_sent+"');\">Hide the correct Sentence</button>";
	$('#answer').load('CLexp1_ans.php?possible_sent='+possible_sent);
}

function hideAnswer(possible_sent)
{
	possible_sent=possible_sent.replace(/,/g,"_");
	document.getElementById("get_hide").innerHTML="<button onclick=\"getAnswer('"+possible_sent+"');\">Get Answers</button>";
	document.getElementById("answer").innerHTML="";
}


</script>
</head>
<body>

<?php

$lang=$_GET['lang'];
$temp="exp1-corpus/".$lang;

$words_temp=str_replace(","," ",$_GET['words_selected']);
$words_selected=explode(" ",$words_temp);

$words=str_replace(","," ",$_GET['words']);
$words=explode(" ",$words);

$possible_sent=str_replace(",","\t",$_GET['possible_sent']);
$possible_sent=str_replace("-"," ",$possible_sent);
$possible_sent=explode("\t",$possible_sent);

$position=str_replace(","," ",$_GET['position']);
$position=explode(" ",$position);

$position_actual=array();
for($i=0;$i<count($position);$i++)
	if(strlen($position[$i])!=0)
		array_push($position_actual,(int)$position[$i]);

if($position[0]=="%")
{
	$position=array();
	$position_actual=array();
}

$fp=fopen($temp,"r");

$flag_correct=0;

$turn;
if($words_selected[0]=="%" && $words[0]=="%")
{
	$turn=0;
	$cnt_line=0;
	$sentences=array();
	while(!feof($fp))
	{
		$str=fgets($fp);
		$str=str_replace("\n","",$str);
		array_push($sentences,$str);
		$cnt_line=$cnt_line+1;
	}
	$cnt_line=$cnt_line-1;

	$sent=$sentences[rand(0,$cnt_line-1)];
	$possible_sent=explode("\t",$sent);

	$words=explode(" ",$possible_sent[0]);
	shuffle($words);
}
else
	$turn=$_GET['turn'];

for($i=0;$i<count($possible_sent);$i++)
	if(trim($possible_sent[$i])===trim($words_temp))
		$flag_correct=1;

echo "<div style='color:#0000AA;font-size:16px'><br/><br/><b>Form a  sentence (Declarative or Interrogative or any other type) from the given words</b></div><div style='color:#0000FF;font-size:14px' <b><i>(select the buttons in proper order) </i></b><br/><br/></div>";

$temp1="";
if($words_selected[0]!="%")
	for ($j=0;$j<count($words_selected);$j++)
		if(strlen($words_selected[$j])!=0)
			$temp1=$temp1.$words_selected[$j]."_";

$temp2="";
for ($j=0;$j<count($words);$j++)
	if(strlen($words[$j])!=0)
		$temp2=$temp2.$words[$j]."_";

$temp3="";
for ($j=0;$j<count($possible_sent);$j++)
	if(strlen($possible_sent[$j])!=0)
		$temp3=$temp3.$possible_sent[$j]."_";
$temp3=str_replace(" ","-",$temp3);

$temp4="";
for ($j=0;$j<count($position);$j++)
	if(strlen($position[$j])!=0)
		$temp4=$temp4.$position[$j]."_";

for($i=0;$i<count($words);$i++)
	if(strlen($words[$i])!=0)
	{
		if(!in_array($i,$position_actual))
			echo "<button onclick=\"select('".$words[$i]."','".$temp1."','".$lang."','".$temp2."','".$temp3."',".$turn.",'".$temp4."',".$i.");\">".$words[$i]."</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
	}
echo "<br/><br/>";

$count=0;
if($words_selected[0]!="%")
	for($i=0;$i<count($words_selected);$i++)
		if(strlen($words_selected[$i])!=0)
		{
			$count++;
			if ($count==1)
				echo "<div style='color:#0000AA'><b>Formed Sentence</b> (<i style='color:#0000FF'>after selecting words</i>): </div><b style='font-size:30px'>".$words_selected[$i]."</b>&nbsp;&nbsp;&nbsp;";
			else
				echo "<b style='font-size:30px'>".$words_selected[$i]."</b>&nbsp;&nbsp;&nbsp;";
		}

$cnt1=0;
for($i=0;$i<count($words_selected);$i++)
	if(strlen($words_selected[$i])!=0)
		$cnt1=$cnt1+1;

$cnt2=0;
for($i=0;$i<count($words);$i++)
	if(strlen($words[$i])!=0)
		$cnt2=$cnt2+1;

if($cnt1>=1 && $words_selected[0]!="%")
	echo "<br/><br/><button onclick=\"clears('".$temp2."','".$lang."',".$turn.",'".$temp3."','".$temp4."');\">Re-form the sentence</button>";

if($cnt1==$cnt2)
{
	echo "<br/><br/><button onclick=\"check('".$temp1."','".$temp2."','".$lang."',".$turn,",'".$temp3."','".$temp4."');\">Check the correctness of this  sentence</button>";
	if($flag_correct==1 && $turn>=1)
		echo "<br/><br/><p id='right_wrong' style='text-align:center;font-size:30px;color:#008000'>Right answer!!!</p>";
	else if($flag_correct==0 && $turn>=1)
	{
		echo "<br/><br/><p id='right_wrong' style='text-align:center;font-size:30px;color:#FF0000'>Wrong answer!!!</p>";
		echo "<br/><br/><div id='get_hide'><button onclick=\"getAnswer('".$temp3."');\">Get Correct Sentence</button></div>";
	}
}

echo "<br/><br/><div align=\"center\" id='answer'></div>";

?>

</body>
</html>
