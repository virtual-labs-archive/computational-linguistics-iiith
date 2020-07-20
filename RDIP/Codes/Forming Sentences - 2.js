var English = {
				   '1' : ['John ate an apple before afternoon',
				   		  'before afternoon John ate an apple',
				   		  'John before afternoon ate an apple'],

				   '2' : ['some students like to study in the night',
				   		  'at night some students like to study'],
				   
				   '3' : ['John and Mary went to church',
				   		  'Mary and John went to church'],
				
				   '4' : ['John went to church after eating',
				   		  'after eating John went to church',
				   		  'John after eating went to church'],
				
				   '5': ['did he go to market',
				   		 'he did go to market'],
				  
				   '6': ['the woman who called my sister sells cosmetics',
				   		 'the woman who sells cosmetics called my sister',
				   		 'my sister who sells cosmetics called the woman',
				   	     'my sister who called the woman sells cosmetics'],
				  
				   '7': ['John goes to the library and studies',
				   		 'John studies and goes to the library'],
				
				   '8': ['John ate an apple so did she',
				   		 'she ate an apple so did John'],
				 
				   '9': ['the teacher returned the book after she noticed the error',
				   		 'the teacher noticed the error after she returned the book',
				   		 'after the teacher returned the book she noticed the error',
				   		 'after the teacher noticed the error she returned the book',
				   		 'she returned the book after the teacher noticed the error',
				   		 'she noticed the error after the teacher returned the book',
				   		 'after she returned the book the teacher noticed the error',
				   		 'after she noticed the error the teacher returned the book'],
		
				   '10': ['I told her that I bought a book yesterday',
				   		  'I told her yesterday that I bought a book',
				   		  'yesterday I told her that I bought a book',
				   		  'I bought a book that I told her yesterday',
				   		  'I bought a book yesterday that I told her',
				   		  'yesterday I bought a book that I told her']
               }

var Hindi = {
				'1' : ['राम और श्याम बाजार गयें',
					   'राम और श्याम गयें बाजार',
					   'बाजार गयें राम और श्याम',
					   'गयें बाजार राम और श्याम'],

				'2' : ['राम सोया और श्याम भी',
					   'श्याम सोया और राम भी',
					   'सोया श्याम और राम भी',
					   'सोया राम और श्याम भी'],
		
				'3' : ['मैंने उसे बताया कि राम सो रहा है',
					   'मैंने उसे बताया कि सो रहा है राम',
					   'उसे मैंने बताया कि राम सो रहा है',
					   'उसे मैंने बताया कि सो रहा है राम',
					   'मैंने बताया उसे कि राम सो रहा है',
					   'मैंने बताया उसे कि सो रहा है राम',
					   'उसे बताया मैंने कि राम सो रहा है',
					   'उसे बताया मैंने कि सो रहा है राम',
					   'बताया मैंने उसे कि राम सो रहा है',
					   'बताया मैंने उसे कि सो रहा है राम',
					   'बताया उसे मैंने कि राम सो रहा है',
					   'बताया उसे मैंने कि सो रहा है राम'],
				
				'4': ['राम खाकर सोया',
					  'खाकर राम सोया',
					  'राम सोया खाकर',
					  'खाकर सोया राम',
				      'सोया राम खाकर',
				      'सोया खाकर राम'],
		
				'5': ['बिल्लियों को मारकर कुत्ता सो गया',
					  'मारकर बिल्लियों को कुत्ता सो गया',
					  'बिल्लियों को मारकर सो गया कुत्ता',
					  'मारकर बिल्लियों को सो गया कुत्ता',
					  'कुत्ता सो गया बिल्लियों को मारकर',
					  'कुत्ता सो गया मारकर बिल्लियों को',
					  'सो गया कुत्ता बिल्लियों को मारकर',
					  'सो गया कुत्ता मारकर बिल्लियों को'],
				
				'6': ['एक लाल किताब वहाँ है',
					  'एक लाल किताब है वहाँ',
					  'वहाँ है एक लाल किताब',
					  'है वहाँ एक लाल किताब'],
	
				'7': ['एक बड़ी सी किताब वहाँ है',
					  'एक बड़ी सी किताब है वहाँ',
					  'बड़ी सी एक किताब वहाँ है',
					  'बड़ी सी एक किताब है वहाँ',
				      'वहाँ है एक बड़ी सी किताब',
				      'वहाँ है बड़ी सी एक किताब',
				      'है वहाँ एक बड़ी सी किताब',
				      'है वहाँ बड़ी सी एक किताब']
			}

var eh = "";
var language = "";
var sentence = 0;
var getsentence = "";
var arr;
var random = -1;
var formeddivexists = 0;

function sel() {
	language = document.getElementById('language').options[document.getElementById('language').selectedIndex].text;
	if (language == "---Select Language---") {
		clear();
		alert("Select language");
		return false;
	}

	else if (language == "English" || language == "Hindi") {
		document.getElementById("popup").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words";
		document.getElementById("order").innerHTML = "(select the buttons in proper order)";
		sentencecreation(language);
	}

	else {
		clear();
	}
}

function clear() {
	language = "";
	sentence = "";
	getsentence = "";
}

function sentencecreation(language) {
	document.getElementById("formeddiv").innerHTML = "";
	formeddivexists = 0;
    document.getElementById("buttondiv").innerHTML = "";
    document.getElementById("reformdiv").innerHTML = "";
    document.getElementById("checkdiv").innerHTML = "";
    document.getElementById("ansdiv").innerHTML = "";
    document.getElementById("rwansdiv").innerHTML = "";
    document.getElementById("getansdiv").innerHTML = "";
	if (language == "English") {
		sentence = Math.floor(Math.random() * 10);
		random = sentence;
		getsentence = English[sentence][0];
		buttoncreation(getsentence);
		eh = "e";
	}

	else if (language = "Hindi") {
		sentence = Math.floor(Math.random() * 7);
		random = sentence;
		getsentence = Hindi[sentence][0];
		buttoncreation(getsentence);
		eh = "h";
	}

	else {
		clear();
	}
}	

function buttoncreation(str) {
	document.getElementById("formeddiv").innerHTML = "";
	arr = jumble(str.split(" "));
	var buttondiv = document.getElementById("buttondiv");
	document.getElementById("buttondiv").innerHTML = "";
	for (var i = 0; i < arr.length; i++) {
		console.log(arr);
		var button = document.createElement("button");
		button.innerHTML = arr[i];
		button.setAttribute("id","sentence_button" + String(parseFloat(i)));
		buttondiv.appendChild(button);
		button.addEventListener("click", buttonclick);
	}
}

function jumble(word) {
	var i = word.length - 1;
	var j;
	while(i >= 0) {
		j = Math.floor(Math.random() * (i + 1));
		console.log(word[i], word[j]);
		[word[i], word[j]] = [word[j], word[i]];
		i -= 1;
	}
	return word;
}


function buttonclick() {
	button_id = this.id;
	button_value = $("#" + button_id).text();
	buttondiv = document.getElementById("buttondiv");//buttondiv is a DOM object.
	formeddiv = document.getElementById("formeddiv");

	if (formeddivexists == 0) {
		var p1 = document.createElement('p'); 
		p1.textContent = "Formed Sentence ";
		p1.setAttribute('id', 'formed');
		formeddiv.appendChild(p1);
		var span1 = document.createElement('i');
		span1.textContent = "(after selecting words):";
		span1.setAttribute('id', 'span');
		spanned.appendChild(span1);
		p1.appendChild(span1);
		reformdiv = document.getElementById("reformdiv");
		var button = document.createElement('BUTTON');
		var text = document.createTextNode("Re-form the sentence");
		button.appendChild(text);
		reformdiv.appendChild(button);
		button.addEventListener("click", reform); 
		formeddivexists = 1;
	}

	var p2 = document.createElement('p');
	p2.textContent = button_value + " ";
	p2.setAttribute('id', 'formedbutton');
	p2.setAttribute('class', 'formedbutton');
	formeddiv.appendChild(p2);

	buttondiv.removeChild(document.getElementById(button_id));
	var buttondivlength = buttondiv.childElementCount;
	console.log(buttondivlength);
	if (buttondivlength == 0) {
		checkbutton();
	}
}

/*function reform() {
	document.getElementById("formeddiv").innerHTML = "";
	formeddivexists = 0;
    document.getElementById("buttondiv").innerHTML = "";
    document.getElementById("reformdiv").innerHTML = "";
    document.getElementById("checkdiv").innerHTML = "";
    document.getElementById("ansdiv").innerHTML = "";
    document.getElementById("rwansdiv").innerHTML = "";
    document.getElementById("getansdiv").innerHTML = "";
    buttoncreation(getsentence);
}

function checkbutton() {
	var ansdiv = document.getElementById("ansdiv");
	checkdiv = document.getElementById("checkdiv");
	var button = document.createElement('BUTTON');
	var text = document.createTextNode("Check the correctness of this sentence");
	button.appendChild(text);
	checkdiv.appendChild(button);
	button.addEventListener("click", checkcorrectness);	
}

function checkcorrectness() {
	var resultsentence = "";
	var elements = document.getElementsByClassName("formedbutton");
	for (var i = 0; i < elements.length; i++) {
		resultsentence += elements[i].textContent;
	}
	console.log(resultsentence.length);
	resultsentence = resultsentence.trim();
	if (eh == "e") {
		for (var i = 0; i < English[random].length; i++) {
			console.log(English[random][i]);
			console.log(English[random][i].length);
			if (English[random][i] == resultsentence) {
				console.log(resultsentence);
				console.log(English[random]);
				console.log(random);
				document.getElementById("rwansdiv").innerHTML = "Right answer!!!";
				document.getElementById("rwansdiv").style.color = "green";
				break;
			}
		}
		if (i == English[random].length) {
			document.getElementById("rwansdiv").innerHTML = "Wrong answer!!!";
			document.getElementById("rwansdiv").style.color = "red";

			var button = document.createElement('BUTTON');
			var text = document.createTextNode("Get Correct Sentence");
			button.setAttribute('id', 'getsentenceid');
			document.getElementById("getansdiv").innerHTML = "";
			document.getElementById("ansdiv").innerHTML = "";
			button.appendChild(text);
			ansdiv.appendChild(button);
			button.addEventListener("click", getanswers);
		}
	}
	if (eh == "h") {
		for (var i = 0; i < Hindi[random].length; i++) {
			if (Hindi[random][i] == resultsentence) {
				console.log(Hindi[random]);
				console.log(random);
				document.getElementById("rwansdiv").innerHTML = "Right answer!!!";
				document.getElementById("rwansdiv").style.color = "green";
				break;
			}
		}
		if (i == Hindi[random].length) {
			document.getElementById("rwansdiv").innerHTML = "Wrong answer!!!";
			document.getElementById("rwansdiv").style.color = "red";

			var button = document.createElement('BUTTON');
			var text = document.createTextNode("Get Correct Sentence");
			button.setAttribute('id', 'getsentenceid');
			document.getElementById("getansdiv").innerHTML = "";
			document.getElementById("ansdiv").innerHTML = "";
			button.appendChild(text);
			ansdiv.appendChild(button);
			button.addEventListener("click", getanswers);
		}
	}
}

function getanswers() {
	document.getElementById("ansdiv").innerHTML = "";
	var getansdiv = document.getElementById("getansdiv");
	document.getElementById("getansdiv").innerHTML = "";

	var button = document.createElement('BUTTON');
	var text = document.createTextNode("Hide the correct Sentence");
	button.appendChild(text);
	getansdiv.appendChild(button);
	button.addEventListener("click", hideanswers);

	if (this.id == 'creategetansid') {
		var button = creategetans();
		getansdiv.appendChild(button);
	}
	if (eh == "e") {
		for (var i = 0; i < English[random].length; i++) {
			var x = document.createElement("p");
			var t = document.createTextNode(English[random][i]);
			x.setAttribute('id', 'possibilities');
			x.appendChild(t);
			getansdiv.appendChild(x);
		}
	}
	if (eh == "h") {
		for (var i = 0; i < Hindi[random].length; i++) {
			var x = document.createElement("p");
			var t = document.createTextNode(Hindi[random][i]);
			x.setAttribute('id', 'possibilities');
			x.appendChild(t);
			getansdiv.appendChild(x);
		}
	}

	if (this.id == 'creategetansid') {
		document.getElementById("creategetansid").remove();
	}
	else {
		document.getElementById("getsentenceid").remove();
	}
}

function hideanswers() {
    console.log("Hello");
    document.getElementById("getansdiv").innerHTML = "";
    creategetans();
    var button = creategetans();
    getansdiv.appendChild(button);
}

function creategetans() {
	var button = document.createElement('BUTTON');
	var text = document.createTextNode("Get Answers");
	button.appendChild(text);
	button.setAttribute('id', 'creategetansid');
	button.addEventListener("click", getanswers);
	return button;
}*/