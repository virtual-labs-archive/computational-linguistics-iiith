<html>
<head>
<script class='gtm'>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-W59SWTR');</script>

<script>


function selectLang()
{

var lang = document.getElementById("lang_opt");
theIndx=lang.selectedIndex;
lang_id=lang.options[theIndx].value;
if(lang_id=="0")
	{
		alert("Select Language");
		return;
	}
var lno=parseFloat(lang_id);
$('#sen_opt').load('experiment6-0.php?ind='+lno);
}

</script>

</head>
<body>

<!--<div id="mainContainer" align="center">
<?php 
echo "<form action=\"javascript:selectLang()\" target=\"_parent\" method=\"post\">";
echo "<select name=\"lang_opt\" id=\"lang_opt\" autocomplete=\"off\" onchange=\"selectLang(this.value);\">";
          echo "<option value=\"0\" select=\"selected\">---Select Language---</option>";
          echo "<option value=\"1\">English</option>";
	  echo "<option value=\"2\">Hindi</option>";
          
echo "</select>"; ?>
<br/><br/> 
</form>
<div id=sen_opt></div> </div>-->


<h1 class="text-h1-lightblue">Chunking</h1>
<div class="content" id="experiment-article-section-4-content">
  <div id="chunk">
    <div align="center" id="mainContainer">
      <div align="center" id="mainContainer">
        <form action="javascript:selectLang()" method="post" target="_parent">
          <select autocomplete="off" id="lang_opt" name="lang_opt" onchange="selectLang(this.value);">
            <option select="selected" value="0">---Select Language---</option>
            <option value="1">English</option>
            <option value="2">Hindi</option>
          </select>
          <br/>
          <br/>
        </form>
        <div id="sen_opt"></div>
      </div>
    </div>
  </div>
</div>
</body>
</html>
