<html>
<head>
<style type="text/css">
        table { border-collapse: collapse; }
        td { border: solid grey 1px; }
        td.none { border: none; }
</style>

<script>

function checkAnswer(){ 

var sen_info= document.getElementById("sentence_info").value;
//answer_chunk=new Array();
answer_chunk=sen_info.split(" ");
var i;
your_answer=new Array();
flag=0;
for(i=0;i<answer_chunk.length;i++)
{
    your_answer[i]=document.getElementById('token'+i).value;
    
}
//document.getElementById('cor_head').innerHTML='<img src="wrong.png" height="25" width="25" alt="Wrong" /> ';
          	
for (i=0; i<answer_chunk.length;i++)
   {     chunk=answer_chunk[i].split("/");
        
	 if(your_answer[i]!=chunk[1])
          {    	    flag=1;
		    document.getElementById('correction'+i).innerHTML='<img src="wrong.png" style="height:25px;width:25px" alt="Wrong" /> ';
          }
	else     {  document.getElementById('correction'+i).innerHTML='<img src="right.png" style="height:25px;width:25px" alt="Right" /> ';
                     
                  }
                                    
  }
if(flag==1)  document.getElementById("see_soln").innerHTML='<br/> <form action="javascript:correctTable()" > <input type="submit" value="Get Answer" onsubmit="correctTable();" /> </form><br/>';


}
	
function correctTable()				//prints the correct table
{

     var sen_info= document.getElementById("sentence_info").value;
     answer_chunk=sen_info.split(" ");
     var i;
     for(i=0;i<answer_chunk.length;i++)
     {     chunk=answer_chunk[i].split("/");
           document.getElementById('correct'+i).innerHTML=chunk[1];

    
     }
     document.getElementById("see_soln").innerHTML='<br/> <form action="javascript:clearTable()" > <input type="submit" value="Hide Answer" onsubmit="clearTable();" /> </form>';


}

function clearTable()
{
     var sen_info= document.getElementById("sentence_info").value;
     answer_chunk=sen_info.split(" ");
     var i;
     for(i=0;i<answer_chunk.length;i++)
     {   document.getElementById('correct'+i).innerHTML='';

    
     }
     document.getElementById("see_soln").innerHTML='<br/> <form action="javascript:correctTable()" > <input type="submit" value="Get Answer" onsubmit="correctTable();" /> </form><br/>';

}




</script>
</head>
<body>


<center><br/>
<?php 
     
      $lang_opt=$_GET['lang'];
      if(strcmp($lang_opt, "1")==0)
      { $sentence_path="Exp5/Eng-Sen.txt";
        $option_path="Exp5/answer_opt_eng.txt";
      }
      else
      { $sentence_path="Exp5/Hin-Sen.txt";
        $option_path="Exp5/answer_opt_hin.txt";
      }
      $f1 =  fopen($sentence_path, "r");
      $buffer=fread($f1, filesize($sentence_path));
      $options=split("\n", $buffer); 
      $sel_sen=$options[$_GET['ind']];
      $sen=split("&",$sel_sen);      
      $question=$sen[0];
      $answer=$sen[1];      
      $answer_chunk=split(" ", $answer);
      $f2 =  fopen($option_path, "r");
      $buffer2=fread($f2, filesize($option_path));
      $ans_tokens=split("\n", $buffer2); 
      
 ?>
      <form action="javascript:checkAnswer()" target="_parent" method="post">
      <table cellspacing="-2" cellpadding="4" border="1" style="text-align:center;height:25px;width:25px">
      <?php
      echo "<div style='text-align:center;color:#0000FF'><i>Select the POS tag for corresponding words</i></div>";
      echo "<input type=\"hidden\" name=\"sentence_info\" id=\"sentence_info\" value=\"".$answer."\"/>";
      echo "<th>Lexicon</th><th>POS</th><th id=\"cor_head\"></th><th id=\"ans_head\"></th>"; 
      for($j=0;$j<sizeof($answer_chunk);$j++){ 
      echo "<tr>";
      $part_answer=split("/",$answer_chunk[$j]);
            echo "<td>$part_answer[0]</td><td><select name=\"t\" id=\"token".$j."\">";
      for($y=0; $y<count($ans_tokens)-1; $y++)
            echo "<option>".$ans_tokens[$y]."</option>";
      echo "</td><td id= \"correction".$j."\"></td><td id=\"correct".$j."\"></td></tr>";
      
      }


     
      echo "</table>";
      

      ?>
      
<br/>
<center><input type="submit" value="Submit" onsubmit="checkAnswer();"></center> </form>
<center><div id="see_soln"></div></center>
</form>
</center>
</body>
</html>
