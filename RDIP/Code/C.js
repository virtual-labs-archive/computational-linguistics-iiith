var sentences='{"ste1":['+'{"a":"John ate an apple before afternoon","b":"before afternoon John ate an apple","c":"John before afternoon ate an apple"},'+
'{"a":"some students like to study in the night","b":"in the night some students like to study"},'+
'{"a":"John and Mary went to church","b":"Mary and John went to church"},'+
'{"a":"John went to church after eating",	"b":"after eating John went to church","c":"John after eating went to church"},'+
'{"a":"did he go to market","b":"he did go to market"},'+
'{"a":"the woman who called my sister sells cosmetics","b":"the woman who sells cosmetics called my sister","c":"my sister who sells cosmetics called the woman","d":"my sister who called the woman sells cosmetics"},'+
'{"a":"John goes to the library and studies","b":"John studies and goes to the library"},'+
'{"a":"John ate an apple so did she","b":"she ate an apple so did John"},'+
'{"a":"the teacher returned the book after she noticed the error","b":"the teacher noticed the error after she returned the book","c":"after the teacher returned the book she noticed the error","d":"after the teacher noticed the error she returned the book","e":"she returned the book after the teacher noticed the error","f":"she noticed the error after the teacher returned the book","g":"after she returned the book the teacher noticed the error","h":"after she noticed the error the teacher returned the book"},'+
'{"a":"I told her that I bought a book yesterday","b":"I told her yesterday that I bought a book","c":"yesterday I told her that I bought a book","d":"I bought a book that I told her yesterday","e":"I bought a book yesterday that I told her",	"f":"yesterday I bought a book that I told her"}]}';
var sentences2='{"ste2":['+'{"a":"राम और श्याम बाजार गयें","b":"राम और श्याम गयें बाजार","c":"बाजार गयें राम और श्याम","d":"गयें बाजार राम और श्याम"},'+
    '{"a":"राम सोया और श्याम भी","b":"श्याम सोया और राम भी","c":"सोया श्याम और राम भी","d":"सोया राम और श्याम भी"},'+
    '{"a":"मैंने उसे बताया कि राम सो रहा है", "b":"मैंने उसे बताया कि सो रहा है राम","c":"उसे मैंने बताया कि राम सो रहा है","d":"उसे मैंने बताया कि सो रहा है राम","e":"मैंने बताया उसे कि राम सो रहा है","f":"मैंने बताया उसे कि सो रहा है राम","g":"उसे बताया मैंने कि राम सो रहा है","h":"उसे बताया मैंने कि सो रहा है राम","i":"बताया मैंने उसे कि राम सो रहा है",    "j":"बताया मैंने उसे कि सो रहा है राम", "k":"बताया उसे मैंने कि राम सो रहा है",    "l":"बताया उसे मैंने कि सो रहा है राम"},'+
    '{"a":"राम खाकर सोया","b":"खाकर राम सोया","c":"राम सोया खाकर","d":"खाकर सोया राम","e":"सोया राम खाकर","f":"सोया खाकर राम"},'+     
    '{"a":"बिल्लियों को मारकर कुत्ता सो गया","b":"मारकर बिल्लियों को कुत्ता सो गया","c":"बिल्लियों को मारक र सो गया कुत्ता","d":"मारकर बिल्लियों को सो गया कुत्ता","e":"कुत्ता सो गया बिल्लियों को मारकर","f":"कुत्ता सो गया मारकर बिल्लियों को","g":"सो गया कुत्ता बिल्लियों को मारकर","h":"सो गया कुत्ता मारकर बिल्लियों को"},'+
    '{"a":"एक लाल किताब वहाँ है","b":"एक लाल किताब है वहाँ","c":"वहाँ है एक लाल किताब","d":"है वहाँ एक लाल किताब"},'+
    '{"a":"एक बड़ी सी किताब वहाँ है","b":"एक बड़ी सी किताब है वहाँ","c":"बड़ी सी एक किताब वहाँ है","d":"बड़ी सी एक किताब है वहाँ","e":"वहाँ है एक बड़ी सी किताब","f":"वहाँ है बड़ी सी एक किताब","g":"है वहाँ एक बड़ी सी किताब","h":"है वहाँ बड़ी सी एक किताब"}]}'
function dis(){
  document.getElementById("p11").innerHTML=" ";
  document.getElementById("p9").innerHTML=" ";
  document.getElementById("p10").innerHTML=" ";
  document.getElementById("p8").innerHTML=" ";
  document.getElementById("p7").innerHTML=" ";
  document.getElementById("p3").innerHTML=" ";
  document.getElementById("p3").value=" ";
  document.getElementById("p5").innerHTML=" ";
  document.getElementById("p6").innerHTML=" ";
  for(i=0;i<10;i++){
  document.getElementById(i).value=" ";
  }
  count1=0;
  var x=document.getElementById("lan").value;
  if(x=="English"){
    document.getElementById("p1").innerHTML="Form a sentence(Declarative or Interrogative or any other type)from the given words"
    document.getElementById("p2").innerHTML="(select the buttons in proper order)"
    var a=Math.floor(Math.random() * 10);
    document.getElementById("p1").value=a;
obj=JSON.parse(sentences);
var b=obj.ste1[a].a;
var c=b.split(" ");
var d=c.length
document.getElementById("p4").value=d;
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
    var a=Math.floor(Math.random() * 7);
    document.getElementById("p1").value=a;
    obj=JSON.parse(sentences2);
    var b=obj.ste2[a].a;
    var c=b.split(" ");
    var d=c.length
    document.getElementById("p4").value=d;
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
var count1=0;
function pri(i){
  document.getElementById("p4").innerHTML="Formed Sentence(after selecting words):"
  var a=document.getElementById(i).value;
  var b=document.getElementById("p4").value;
  count1=count1+1;
  document.getElementById("p3").value+=a+" "
  document.getElementById("p3").innerHTML+=a+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp";
  document.getElementById(i).innerHTML="  ";
  document.getElementById("p5").innerHTML="<button>Re-form the sentence</button>";
  if(count1==b){
  document.getElementById("p6").innerHTML="<button>check the corectness of sentence</button>";
}
}
function reform(){
  document.getElementById("p11").innerHTML=" ";
  document.getElementById("p10").innerHTML=" ";
  document.getElementById("p9").innerHTML=" ";
  document.getElementById("p7").innerHTML=" "
  document.getElementById("p8").innerHTML=" "
  document.getElementById("p3").value=" ";
  document.getElementById("p3").innerHTML=" ";
  document.getElementById("p4").innerHTML=" ";
  document.getElementById("p5").innerHTML=" ";
  count1=0;
  for(var i=0;i<10;i++){
    var a=document.getElementById(i).value
    if(a!=" "){
    document.getElementById(i).innerHTML="<button>"+a+"</button>"
    document.getElementById("p6").innerHTML=" ";
  }
}   
}
function ccs(){
var m=document.getElementById ("p1").value
var n= document.getElementById("p3").value
n=n.trim();
var x=document.getElementById("lan").value;
if(x=="English"){
obj=JSON.parse(sentences);
if(n==obj.ste1[m].a||n==obj.ste1[m].b||n==obj.ste1[m].c||n==obj.ste1[m].d||n==obj.ste1[m].e||n==obj.ste1[m].f||n==obj.ste1[m].g||n==obj.ste1[m].h){
document.getElementById("p7").value="CORRECT ANSWER"
document.getElementById("p7").innerHTML="CORRECT ANSWER"
}
else{
  document.getElementById("p8").value="WRONG ANSWER"
  document.getElementById("p8").innerHTML="WRONG ANSWER"
  document.getElementById("p9").innerHTML="<button>Get Correct Sentence</button>"
}
}
else{
  obj=JSON.parse(sentences2);
if(n==obj.ste2[m].a||n==obj.ste2[m].b||n==obj.ste2[m].c||n==obj.ste2[m].d||n==obj.ste2[m].e||n==obj.ste2[m].f||n==obj.ste2[m].g||n==obj.ste2[m].h||n==obj.ste2[m].i||n==obj.ste2[m].j||n==obj.ste2[m].k||n==obj.ste2[m].l){
  document.getElementById("p7").value="CORRECT ANSWER"
  document.getElementById("p7").innerHTML="CORRECT ANSWER"
}
else{
  document.getElementById("p8").innerHTML="WORNG ANSWER"
  document.getElementById("p8").value="WRONG ANSWER"
  document.getElementById("p9").innerHTML="<button>Get Correct Sentence</button>"
}
}
}
function cs(){
  var x=document.getElementById("lan").value;
if(x=="English"){
obj = JSON.parse(sentences);
document.getElementById("p9").innerHTML=" "
document.getElementById("p11").innerHTML="<button>Hide the correct sentences</button>"
var m=document.getElementById ("p1").value
if(m==0){
document.getElementById("p10").innerHTML = obj.ste1[0].a + "<br>" + obj.ste1[0].b + "<br>" + obj.ste1[0].c;
}
if(m==1){
document.getElementById("p10").innerHTML = obj.ste1[1].a + "<br>" + obj.ste1[1].b;
}
if(m==2){
document.getElementById("p10").innerHTML = obj.ste1[2].a + "<br>" + obj.ste1[1].b;
}
if(m==3){
document.getElementById("p10").innerHTML = obj.ste1[3].a + "<br>" + obj.ste1[3].b+"<br>"+obj.ste1[3].c;
}
if(m==4){
document.getElementById("p10").innerHTML = obj.ste1[4].a + "<br>" + obj.ste1[4].b;
}
if(m==5){
document.getElementById("p10").innerHTML = obj.ste1[5].a + "<br>" + obj.ste1[5].b + "<br>" + obj.ste1[5].c + "<br>" + obj.ste1[5].d;
}
if(m==6){
document.getElementById("p10").innerHTML = obj.ste1[6].a + "<br>" + obj.ste1[6].b;
}
if(m==7){
document.getElementById("p10").innerHTML = obj.ste1[7].a + "<br>" + obj.ste1[7].b;
}
if(m==8){
document.getElementById("p10").innerHTML = obj.ste1[8].a + "<br>" + obj.ste1[8].b + "<br>" + obj.ste1[8].c + "<br>" + obj.ste1[8].d + "<br>" + obj.ste1[8].e + "<br>" + obj.ste1[8].f + "<br>" + obj.ste1[8].g + "<br>" + obj.ste1[8].h;
}
if(m==9){
  document.getElementById("p10").innerHTML = obj.ste1[9].a + "<br>" + obj.ste1[9].b + "<br>" + obj.ste1[9].c + "<br>" + obj.ste1[9].d + "<br>" + obj.ste1[9].e + "<br>" + obj.ste1[9].f;
}
}
else{
  obj = JSON.parse(sentences2);
document.getElementById("p9").innerHTML=" "
document.getElementById("p11").innerHTML="<button>Hide the correct sentences</button>"
var m=document.getElementById ("p1").value
if(m==0){
document.getElementById("p10").innerHTML = obj.ste2[0].a + "<br>" + obj.ste2[0].b + "<br>" + obj.ste2[0].c+"<br>"+obj.ste2[0].d;
}
if(m==1){
document.getElementById("p10").innerHTML = obj.ste2[1].a + "<br>" + obj.ste2[1].b+"<br>" + obj.ste2[1].c+"<br>"+obj.ste2[1].d;
}
if(m==2){
document.getElementById("p10").innerHTML = obj.ste2[2].a + "<br>" + obj.ste2[2].b + "<br>" + obj.ste2[2].c+"<br>"+ obj.ste2[2].d+"<br>"+obj.ste2[2].e+"<br>" + obj.ste2[2].f+"<br>"+obj.ste2[2].g+"<br>"+ obj.ste2[2].h+"<br>"+obj.ste2[2].i+"<br>"+ obj.ste2[2].j+"<br>"+obj.ste2[2].k+"<br>" + obj.ste2[2].l;
}
if(m==3){
document.getElementById("p10").innerHTML = obj.ste2[3].a + "<br>" + obj.ste2[3].b+"<br>" + obj.ste2[3].c+"<br>"+obj.ste2[3].d+"<br>" + obj.ste2[3].e+"<br>"+obj.ste2[3].f;
}
if(m==4){
document.getElementById("p10").innerHTML = obj.ste2[4].a + "<br>" + obj.ste2[4].b+"<br>" + obj.ste2[4].c+"<br>"+obj.ste2[4].d+"<br>" + obj.ste2[4].e+"<br>"+obj.ste2[4].f;"<br>" + obj.ste2[4].g+"<br>"+obj.ste2[4].h;
}
if(m==5){
document.getElementById("p10").innerHTML = obj.ste2[5].a + "<br>" + obj.ste2[5].b + "<br>" + obj.ste2[5].c + "<br>" + obj.ste2[5].d;
}
if(m==6){
document.getElementById("p10").innerHTML = obj.ste2[6].a + "<br>" + obj.ste2[6].b+"<br>" + obj.ste2[6].c+"<br>"+obj.ste2[6].d+"<br>" + obj.ste2[6].e+"<br>"+obj.ste2[6].f+"<br>" + obj.ste2[6].g+"<br>"+obj.ste2[6].h;
}
}
}
function hideanswers(){
  document.getElementById("p9").innerHTML="<button>Get answers</button>"
  document.getElementById("p10").innerHTML=" "
  document.getElementById("p11").innerHTML=" " 
}