<html>
<head>
<script>
function checkAns2(){
var ans3_id = document.getElementById("ans3");
var ans3 = ans3_id.value;
var sol3_id = document.getElementById("sol3");
var sol3 = sol3_id.value;
var flag=0;
if(parseFloat(sol3)!=parseFloat(ans3))
         
            document.getElementById("ans3_cont").innerHTML="<input type= \"text\" size= \"4\" name=\"types_root2\" id=\"ans3\" style=\"background-color:red;\" value=\""+ans3+"\"/>";
                   
else

	   { document.getElementById("ans3_cont").innerHTML="<input type= \"text\" size= \"4\" name=\"types_root2\" id=\"ans3\" style=\"background-color:green;\" value=\""+ans3+"\"/>";
	     flag=1;
	   }
if(flag==1)
          document.getElementById("result2").innerHTML="<h2 style=\"color:green;\">Right Answer</h2>"; 
        else
          document.getElementById("result2").innerHTML="<h2 style=\"color:red;\">Wrong Answer</h2>";   

}
</script>
</head>
<body>

<div id="mainContainer" align="center">
<?php
echo "Now, consider all the tokens with the same 'root' word to be of the same type. Recalculate the number of types.<br/><br/>";
$sol3=$_GET["sol"];
echo "<center><form action=\"javascript:checkAns2()\" target=\"_parent\" method=\"post\">";
echo "#new types: <br/><div id=\"ans3_cont\"><input type=\"number\" id=\"ans3\" name=\"types_root2\" step=\"1\" min=\"0\"><input type=\"hidden\" name=\"types_root2\" id=\"sol3\" value=\"$sol3\"></div><br/><input type=\"submit\" value=\"Submit\">";
echo "</form></center><br/>"; 
echo "<div id=\"result2\"></div>";
?>
</div>
</body>
</html>
