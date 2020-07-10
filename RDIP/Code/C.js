function p(){
    document.getElementById("p1").innerHTML="Form a sentence(Declarative or Interrogative or any other type)from the given words"
    document.getElementById("p2").innerHTML="(select the buttons in proper order)"
}
function cor(){
    var sentences='{"ste1":['+'{"a":"John ate an apple before afternoon<br>","b":"before afternoon John ate an apple<br>","c":"John before afternoon ate an apple"},'+
'{"a":"some students like to study in the night<br>","b":"at night some students like to study"},'+
'{"a":"John and Mary went to church<br>","b":"Mary and John went to church"},'+
'{"a":"John went to church after eating<br>",	"b":"after eating John went to church<br>","c":"John after eating went to church"},'+
'{"a":"did he go to market<br>","b":"he did go to market"},'+
'{"a":"the woman who called my sister sells cosmetics<br>","b":"the woman who sells cosmetics called my sister<br>","c":"my sister who sells cosmetics called the woman<br>","d":"my sister who called the woman sells cosmetics"},'+
'{"a":"John goes to the library and studies<br>","b":"John studies and goes to the library"},'+
'{"a":"John ate an apple so did she<br>","b":"she ate an apple so did John"},'+
'{"a":"the teacher returned the book after she noticed the error<br>","b":"the teacher noticed the error after she returned the book<br>","c":"after the teacher returned the book she noticed the error<br>","d":"after the teacher noticed the error she returned the book<br>","e":"she returned the book after the teacher noticed the error<br>","f":"she noticed the error after the teacher returned the book<br>","g":"after she returned the book the teacher noticed the error<br>","h":"after she noticed the error the teacher returned the book"},'+
'{"a":"I told her that I bought a book yesterday<br>","b":"I told her yesterday that I bought a book<br>","c":"yesterday I told her that I bought a book<br>","d":"I bought a book that I told her yesterday<br>","e":"I bought a book yesterday that I told her<br>",	"f":"yesterday I bought a book that I told her"}]}';

obj=JSON.parse(sentences);
document.getElementById("p3").innerHTML=obj.ste1[0].a+""+obj.ste1[0].b+""+obj.ste1[0].c;
document.getElementById("p4").innerHTML=obj.ste1[1].a+""+obj.ste1[1].b;
document.getElementById("p5").innerHTML=obj.ste1[2].a+""+obj.ste1[2].b;
document.getElementById("p6").innerHTML=obj.ste1[3].a+""+obj.ste1[3].b+""+obj.ste1[3].c;
document.getElementById("p7").innerHTML=obj.ste1[4].a+""+obj.ste1[4].b;
document.getElementById("p8").innerHTML=obj.ste1[5].a+""+obj.ste1[5].b+""+obj.ste1[5].c+""+obj.ste1[5].d;
document.getElementById("p9").innerHTML=obj.ste1[6].a+""+obj.ste1[6].b;
document.getElementById("p10").innerHTML=obj.ste1[7].a+""+obj.ste1[7].b;
document.getElementById("p11").innerHTML=obj.ste1[8].a+""+obj.ste1[8].b+""+obj.ste1[8].c+""+obj.ste1[8].d+""+obj.ste1[8].e+""+obj.ste1[8].f+""+obj.ste1[8].g+""+obj.ste1[8].h;
document.getElementById("p12").innerHTML=obj.ste1[9].a+""+obj.ste1[9].b+""+obj.ste1[9].c+""+obj.ste1[9].d+""+obj.ste1[9].e+""+obj.ste1[9].f;


var sentences2='{"ste2":['+'{"a":"राम और श्याम बाजार गयें<br>","b":"राम और श्याम गयें बाजार<br>","c":"बाजार गयें राम और श्याम<br>","d":"गयें बाजार राम और श्याम"},'+
    '{"a":"राम सोया और श्याम भी<br>","b":"श्याम सोया और राम भी<br>","c":"सोया श्याम और राम भी<br>","d":"सोया राम और श्याम भी"},'+
    '{"a":"मैंने उसे बताया कि राम सो रहा है<br>", "b":"मैंने उसे बताया कि सो रहा है राम<br>","c":"उसे मैंने बताया कि राम सो रहा है<br>","d":"उसे मैंने बताया कि सो रहा है राम<br>","e":"मैंने बताया उसे कि राम सो रहा है<br>","f":"मैंने बताया उसे कि सो रहा है राम<br>","g":"उसे बताया मैंने कि राम सो रहा है<br>","h":"उसे बताया मैंने कि सो रहा है राम<br>","i":"बताया मैंने उसे कि राम सो रहा है<br>",    "j":"बताया मैंने उसे कि सो रहा है राम<br>", "k":"बताया उसे मैंने कि राम सो रहा है<br>",    "l":"बताया उसे मैंने कि सो रहा है राम"},'+
    '{"a":"राम खाकर सोया<br>","b":"खाकर राम सोया<br>","c":"राम सोया खाकर<br>","d":"खाकर सोया राम<br>","e":"सोया राम खाकर<br>","f":"सोया खाकर राम"},'+     
    '{"a":"बिल्लियों को मारकर कुत्ता सो गया<br>","b":"मारकर बिल्लियों को कुत्ता सो गया<br>","c":"बिल्लियों को मारकर सो गया कुत्ता<br>","d":"मारकर बिल्लियों को सो गया कुत्ता<br>","e":"कुत्ता सो गया बिल्लियों को मारकर<br>","f":"कुत्ता सो गया मारकर बिल्लियों को<br>","g":"सो गया कुत्ता बिल्लियों को मारकर","h":"सो गया कुत्ता मारकर बिल्लियों को"},'+
    '{"a":"एक लाल किताब वहाँ है<br>","b":"एक लाल किताब है वहाँ<br>","c":"वहाँ है एक लाल किताब<br>","d":"है वहाँ एक लाल किताब"},'+
    '{"a":"एक बड़ी सी किताब वहाँ है<br>","b":"एक बड़ी सी किताब है वहाँ<br>","c":"बड़ी सी एक किताब वहाँ है<br>","d":"बड़ी सी एक किताब है वहाँ<br>","e":"वहाँ है एक बड़ी सी किताब<br>","f":"वहाँ है बड़ी सी एक किताब<br>","g":"है वहाँ एक बड़ी सी किताब<br>","h":"है वहाँ बड़ी सी एक किताब"}]}'


    obj=JSON.parse(sentences2);
    document.getElementById("p13").innerHTML=obj.ste2[0].a+""+obj.ste2[0].b+""+obj.ste2[0].c+""+obj.ste2[0].d;
    document.getElementById("p14").innerHTML=obj.ste2[1].a+""+obj.ste2[1].b+""+obj.ste2[1].c+""+obj.ste2[1].d;
    document.getElementById("p15").innerHTML=obj.ste2[2].a+""+obj.ste2[2].b+""+obj.ste2[2].c+""+obj.ste2[2].d+""+obj.ste2[2].e+""+obj.ste2[2].f+""+obj.ste2[2].g+""+obj.ste2[2].h+""+obj.ste2[2].i+""+obj.ste2[2].j+""+obj.ste2[2].k+""+obj.ste2[2].l;
    document.getElementById("p16").innerHTML=obj.ste2[3].a+""+obj.ste2[3].b+""+obj.ste2[3].c+""+obj.ste2[3].d+""+obj.ste2[3].e+""+obj.ste2[3].f;
    document.getElementById("p17").innerHTML=obj.ste2[4].a+""+obj.ste2[4].b+""+obj.ste2[4].c+""+obj.ste2[4].d+""+obj.ste2[4].e+""+obj.ste2[4].f+""+obj.ste2[2].g+""+obj.ste2[2].h;
    document.getElementById("p18").innerHTML=obj.ste2[5].a+""+obj.ste2[5].b+""+obj.ste2[5].c+""+obj.ste2[5].d;
    document.getElementById("p19").innerHTML=obj.ste2[6].a+""+obj.ste2[6].b+""+obj.ste2[6].c+""+obj.ste2[6].d+""+obj.ste2[6].e+""+obj.ste2[6].f+""+obj.ste2[6].g+""+obj.ste2[6].h;
}