function choice(){
	var eng = [["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"], ["some students like to study in the night","at night some students like to study"], ["John and Mary went to church","Mary and John went to church"], ["John went to church after eating","after eating John went to church","John after eating went to church"], ["did he go to market","he did go to market"], ["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman", "my sister who called the woman sells cosmetics"], ["John goes to the library and studies","John studies and goes to the library"], ["John ate an apple so did she","she ate an apple so did John"], ["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error", "after the teacher noticed the error she returned the book", "she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error", "after she noticed the error the teacher returned the book"], ["I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday", "I bought a book yesterday that I told her","yesterday I bought a book that I told her"]];

	var hin = [["राम और श्याम बाजार गयें", "राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"], ["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"], ["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"], ["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"], ["बिल्लियों को मारकर कुत्ता सो गया","मारकर बिल्लियों को कुत्ता सो गया","बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता","कुत्ता सो गया बिल्लियों को मारकर","कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"], ["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"], ["एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है", " बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब","है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"]];



	var d= document.getElementById("lang");
	var ch = d.options[d.selectedIndex].text;
	if (ch=="English" || ch=="Hindi"){
		document.getElementById("disp_ins").innerHTML =	"Form a sentence (Declarative or Interrogative or any other type) from the given words " + "<br>" + "(select the buttons in proper order)";
	}
	if(ch =="English"){
		n=Math.floor(Math.random() * 10) + 1;
		var en=eng[n][1];
		//document.getElementById("e").innerHTML = eng[n][1];
		randomEng(en);
	}
	else{
		n=Math.floor(Math.random() * 7) + 1;
		var hi=hin[n][1];
		//document.getElementById("h").innerHTML = hin[n][1];
		randomHin(hi);
	}

}

function randomEng(en){
	var n = en.length;
	en_array=en.trim().split(" ");

	var currentIndex = en_array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = en_array[currentIndex];
    en_array[currentIndex] = en_array[randomIndex];
    en_array[randomIndex] = temporaryValue;
  }
  sent_b(en_array);
}


function randomHin(hi){
	var n = hi.length;
	hi_array=hi.trim().split(" ");

	var currentIndex = hi_array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = hi_array[currentIndex];
    hi_array[currentIndex] = hi_array[randomIndex];
    hi_array[randomIndex] = temporaryValue;
  }
  sent_b(hi_array);
}



function sent_b(array) {  
    var myDiv = document.getElementById("display");  
    for(i=0; i<array.length; i++){             
    var button = document.createElement('BUTTON');  
    var text = document.createTextNode(array[i]); 
     button.appendChild(text); 
    myDiv.appendChild(button); 
    } 
}  
