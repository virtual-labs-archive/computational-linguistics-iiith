function dis(){
  document.getElementById("p3").innerHTML=" ";
  var x=document.getElementById("lan").value;
  if(x=="English"){
    document.getElementById("p1").innerHTML="Form a sentence(Declarative or Interrogative or any other type)from the given words"
    document.getElementById("p2").innerHTML="(select the buttons in proper order)"
    var sentences='{"ste1":['+'{"a":"John ate an apple before afternoon","b":"before afternoon John ate an apple<br>","c":"John before afternoon ate an apple"},'+
'{"a":"some students like to study in the night","b":"at night some students like to study"},'+
'{"a":"John and Mary went to church","b":"Mary and John went to church"},'+
'{"a":"John went to church after eating",	"b":"after eating John went to church<br>","c":"John after eating went to church"},'+
'{"a":"did he go to market","b":"he did go to market"},'+
'{"a":"the woman who called my sister sells cosmetics","b":"the woman who sells cosmetics called my sister<br>","c":"my sister who sells cosmetics called the woman<br>","d":"my sister who called the woman sells cosmetics"},'+
'{"a":"John goes to the library and studies","b":"John studies and goes to the library"},'+
'{"a":"John ate an apple so did she","b":"she ate an apple so did John"},'+
'{"a":"the teacher returned the book after she noticed the error","b":"the teacher noticed the error after she returned the book<br>","c":"after the teacher returned the book she noticed the error<br>","d":"after the teacher noticed the error she returned the book<br>","e":"she returned the book after the teacher noticed the error<br>","f":"she noticed the error after the teacher returned the book<br>","g":"after she returned the book the teacher noticed the error<br>","h":"after she noticed the error the teacher returned the book"},'+
'{"a":"I told her that I bought a book yesterday","b":"I told her yesterday that I bought a book<br>","c":"yesterday I told her that I bought a book<br>","d":"I bought a book that I told her yesterday<br>","e":"I bought a book yesterday that I told her<br>",	"f":"yesterday I bought a book that I told her"}]}';
    var a=Math.floor(Math.random() * 9);
obj=JSON.parse(sentences);
var b=obj.ste1[a].a;
var c=b.split(" ");
var d=c.length
var f=[];
  var k = 0;
  do {
    var a=Math.floor(Math.random() * d)
    if(f.includes(a)==false){
     f.push(a)
   }
    k++;
  }
  while (d!=f.length);
for(var i=0;i<d;i++){
    document.getElementById(i).value=c[f[i]];
    document.getElementById(i).innerHTML="<button>"+c[f[i]]+"</button>"
}
for(var j=d;j<10;j++){
    document.getElementById(j).innerHTML="  "
}

}


else{
    document.getElementById("p1").innerHTML="Form a sentence(Declarative or Interrogative or any other type)from the given words"
    document.getElementById("p2").innerHTML="(select the buttons in proper order)"
var sentences2='{"ste2":['+'{"a":"राम और श्याम बाजार गयें","b":"राम और श्याम गयें बाजार","c":"बाजार गयें राम और श्याम","d":"गयें बाजार राम और श्याम"},'+
    '{"a":"राम सोया और श्याम भी","b":"श्याम सोया और राम भी","c":"सोया श्याम और राम भी","d":"सोया राम और श्याम भी"},'+
    '{"a":"मैंने उसे बताया कि राम सो रहा है", "b":"मैंने उसे बताया कि सो रहा है राम","c":"उसे मैंने बताया कि राम सो रहा है","d":"उसे मैंने बताया कि सो रहा है राम","e":"मैंने बताया उसे कि राम सो रहा है","f":"मैंने बताया उसे कि सो रहा है राम","g":"उसे बताया मैंने कि राम सो रहा है","h":"उसे बताया मैंने कि सो रहा है राम","i":"बताया मैंने उसे कि राम सो रहा है",    "j":"बताया मैंने उसे कि सो रहा है राम", "k":"बताया उसे मैंने कि राम सो रहा है",    "l":"बताया उसे मैंने कि सो रहा है राम"},'+
    '{"a":"राम खाकर सोया","b":"खाकर राम सोया","c":"राम सोया खाकर","d":"खाकर सोया राम","e":"सोया राम खाकर","f":"सोया खाकर राम"},'+     
    '{"a":"बिल्लियों को मारकर कुत्ता सो गया","b":"मारकर बिल्लियों को कुत्ता सो गया","c":"बिल्लियों को मारकर सो गया कुत्ता","d":"मारकर बिल्लियों को सो गया कुत्ता","e":"कुत्ता सो गया बिल्लियों को मारकर","f":"कुत्ता सो गया मारकर बिल्लियों को","g":"सो गया कुत्ता बिल्लियों को मारकर","h":"सो गया कुत्ता मारकर बिल्लियों को"},'+
    '{"a":"एक लाल किताब वहाँ है","b":"एक लाल किताब है वहाँ","c":"वहाँ है एक लाल किताब","d":"है वहाँ एक लाल किताब"},'+
    '{"a":"एक बड़ी सी किताब वहाँ है","b":"एक बड़ी सी किताब है वहाँ","c":"बड़ी सी एक किताब वहाँ है","d":"बड़ी सी एक किताब है वहाँ","e":"वहाँ है एक बड़ी सी किताब","f":"वहाँ है बड़ी सी एक किताब","g":"है वहाँ एक बड़ी सी किताब","h":"है वहाँ बड़ी सी एक किताब"}]}'
    var a=Math.floor(Math.random() * 6);
    obj=JSON.parse(sentences2);
    var b=obj.ste2[a].a;
    var c=b.split(" ");
    var d=c.length
    var f=[];
      var k = 0;
      do {
        var a=Math.floor(Math.random() * d)
        if(f.includes(a)==false){
         f.push(a)
       }
        k++;
      }
      while (d!=f.length);
    for(var i=0;i<d;i++){
        document.getElementById(i).value=c[f[i]];
        document.getElementById(i).innerHTML="<button>"+c[f[i]]+"</button>";
    }
    for(var j=d;j<10;j++){
        document.getElementById(j).innerHTML="  "
    }
    
}
}
function pri(i){
  document.getElementById("p4").innerHTML="Formed Sentence(after selecting words):"
  var a=document.getElementById(i).value;
  document.getElementById("p3").innerHTML+=a+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp";
  document.getElementById(i).innerHTML="  ";
  
}
