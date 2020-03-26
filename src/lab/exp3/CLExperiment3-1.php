<html>
<head>
<script class='gtm'>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-W59SWTR');</script>

<script>
function checkAns(){
var ans1_id = document.getElementById("ans1");
var ans1 = ans1_id.value;
var ans2_id = document.getElementById("ans2");
var ans2 = ans2_id.value;
var sol1_id = document.getElementById("sol1");
var sol1 = sol1_id.value;
var sol2_id = document.getElementById("sol2");
var sol2 = sol2_id.value;
var sol3_id = document.getElementById("sol3");
var sol3 = sol3_id.value;
var cnt=0
if(parseFloat(sol1)!=parseFloat(ans1))
         
            document.getElementById("ans1_cont").innerHTML="<input type= \"text\" size= \"4\" name=\"tokens\" id=\"ans1\" style=\"background-color:red;\" value=\""+ans1+"\"/>";
                   
else
{
	   document.getElementById("ans1_cont").innerHTML="<input type= \"text\" size= \"4\" name=\"tokens\" id=\"ans1\" style=\"background-color:green;\" value=\""+ans1+"\"/>";
cnt=cnt+1;}
if(parseFloat(sol2)!=parseFloat(ans2))
         
            document.getElementById("ans2_cont").innerHTML="<input type= \"text\" size= \"4\" name=\"types\" id=\"ans2\" style=\"background-color:red;\" value=\""+ans2+"\"/>";
                   
else
	{   document.getElementById("ans2_cont").innerHTML="<input type= \"text\" size= \"4\" name=\"types\" id=\"ans2\" style=\"background-color:green;\" value=\""+ans2+"\"/>";
	    cnt=cnt+1;}

  if(cnt==2)
          document.getElementById('result1').innerHTML="<h2 style=\"color:green;\">Right Answer</h2><br/><button onclick=\"type_root("+sol3+");\">Continue </button>";
        else
          document.getElementById("result1").innerHTML="<h2 style=\"color:red;\">Wrong Answer</h2>";  

}

function type_root(sol3)
{
    document.getElementById("sub_but").innerHTML="";  
    $("#result1").load('CLExperiment3-2.php?sol='+sol3);
    
}
</script>

</head>
<body>

<div id="mainContainer" align="center">
<br/>
<?php

$corp_opt=$_GET["ind"];
$corp_opt=floatval($corp_opt);
$corp_opt++;
$corp_path="Exp3/English/Corpus ".$corp_opt.".txt";

$f2 =  fopen($corp_path, "r");
$buffer=fread($f2, filesize($corp_path));

$answer=split("&", $buffer) ;
echo "<div id=\"display\">";
echo $answer[0];
echo "</div><br/>";
echo "<center>Enter the number of tokens and types for the above corpus:"; ?>
<form action="javascript:checkAns()" target="_parent" method="post">
<table cellspacing="-2" cellpadding="4" border="0" style="text-align:center;">
<tr><td>#tokens:</td><td id="ans1_cont">
<?php 
echo "<input type=\"text\" id=\"ans1\" name=\"tokens\" size=\"4\"></td><tr><td>#types:</td><td id =\"ans2_cont\"> <input type=\"text\" name=\"types\" id=\"ans2\" size=\"4\"></td></tr></table><br/>";
echo "<input type=\"hidden\" name=\"tokens\" id=\"sol1\" value=\"$answer[1]\"><input type=\"hidden\" name=\"types\" id=\"sol2\" value=\"$answer[2]\">";
echo "<input type=\"hidden\" name=\"types_root\" id=\"sol3\" value=\"$answer[3]\">";
echo"<div id=sub_but><input type=\"submit\" value=\"Submit\"></div>";
echo "</form></center>"; 
echo "<br/><div id=\"result1\"></div>";

?>

</center>
</body>
</html>
