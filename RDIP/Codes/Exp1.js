var eng = [["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"],
["some students like to study in the night","at night some students like to study"],
["John and Mary went to church","Mary and John went to church"],
["John went to church after eating","after eating John went to church","John after eating went to church"],
["did he go to market","he did go to market"],
["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"],
["John goes to the library and studies","John studies and goes to the library"],
["John ate an apple so did she","she ate an apple so did John"],
["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"],
["I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her","yesterday I bought a book that I told her"]];

var hin = [["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"],
["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"],
["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"],
["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"],
["बिल्लियों को मारकर कुत्ता सो गया","मारकर बिल्लियों को कुत्ता सो गया","बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता","कुत्ता सो गया बिल्लियों को मारकर","कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"],
["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"],
["एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब","है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"]];


var newArray= ["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम","राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी","मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम","राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम","बिल्लियों को मारकर कुत्ता सो गया","मारकर बिल्लियों को कुत्ता सो गया","बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता","कुत्ता सो गया बिल्लियों को मारकर","कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को","एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब","एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब","है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब","John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple","some students like to study in the night","at night some students like to study","John and Mary went to church","Mary and John went to church","John went to church after eating","after eating John went to church","John after eating went to church","did he go to market","he did go to market","the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics", "John goes to the library and studies","John studies and goes to the library", "John ate an apple so did she","she ate an apple so did John", "the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book", "I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her","yesterday I bought a book that I told her" ];

//shuffling words of the sentence

var cc;
var bc;

//comparing
function cs(){
  
        var str= finalsentence.trim();
    for(let i=0;i<newArray.length;i++){
        var str1 = newArray[i];
         console.log(i, str1.localeCompare(str), str, str.length, str1, str1.length)
        var n = str1.localeCompare(str);
        if (n == 0) {
            document.getElementById('s8').innerHTML = "Right !!!";
            
            return;
        }
    }
    document.getElementById('s9').innerHTML = "Wrong !!!";
    
}
function shuffle(jumbled){
	var jumble = jumbled.split(" ");
	var i = jumble.length, temp, randomi;
	while(0!==i){
		randomi = Math.floor(Math.random()*i);
		i -= 1;
		temp = jumble[i];
		jumble[i] = jumble[randomi];
		jumble[randomi] = temp;
	}
	return jumble;
}

var finalsentence ="";
function fs(id,value){
	
	document.getElementById("s4").innerHTML = "Formed Sentence (after selecting words):";
	finalsentence += value + " ";
	 document.getElementById("s5").innerHTML = finalsentence;
	document.getElementById(id).style.display = "none";
	document.getElementById("s6").innerHTML = "<center><button id='reform' onclick='rs()'>Re-form the sentence</button></center>"
    cc++;
    if(bc==cc){
		document.getElementById("s7").innerHTML = "<center><button id='correctness'  onclick='cs()'>Check the correctness</button></center>"
    }
    
}

//reset option
function rs(){
	
	finalsentence = "";
	document.getElementById("s5").innerHTML = finalsentence;
	document.getElementById("reform").innerHTML = "";
	document.getElementById("s4").innerHTML = "";
}




let selection = document.getElementById("choose");
function run(){
if (selection.value === "english"){
                document.getElementById("s2").innerHTML = "(select the buttons in proper order)"
                document.getElementById("s1").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words"
            
var r = Math.floor(Math.random()* eng.length);
		var jumbled = eng[r][0];
		var j = shuffle(jumbled);
		bc=0;
    cc=0;
		var bu ="";
		var fbu = "";
		for(i=0;i<=j.length-1;i++){
			val = j[i];
			bu = "  <button id='btn"+i+"'onclick='fs(this.id,this.value)' value='"+val+"'>"+val+"</button>  ";
			fbu +=bu;
            bc++
           
		}
		s3.innerHTML = fbu.trim();
    
                
}
else if (selection.value === "hindi"){
                document.getElementById("s2").innerHTML = "(select the buttons in proper order)"
                document.getElementById("s1").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words"
              var r = Math.floor(Math.random()* hin.length);
		var jumbled = hin[r][0];
		var j = shuffle(jumbled);
		 bc=0;
    cc=0;
		var bu ="";
		var fbu = "";
		for(i=0;i<=j.length-1;i++){
			val = j[i];
			bu = "  <button id='btn"+i+"'onclick='fs(this.id,this.value)' value='"+val+"'>"+val+"</button>  ";
			fbu +=bu;
            bc++;
		}
		s3.innerHTML = fbu.trim();
	}

else if (selection.value === "Select Language"){
                alert("Choose any language")
                document.getElementById("s2").innerHTML = ""
                document.getElementById("s1").innerHTML = ""
                document.getElementById("s3").innerHTML = ""
                document.getElementById("s4").innerHTML = ""
               
            }
}
