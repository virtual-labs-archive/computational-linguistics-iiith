var English = {
					'1' : 'The child liked the chocolate.',

					'2' : 'She was stopped by the bravest knight.',

					'3' : 'Mary baked a cake for his birthday',

					'4' : 'She decorated the cake carefully',

					'5' : 'Mary wore a dress with polka dots.',
			  }

var Hindi = {
				'1' : 'राम ने सीता के लिए फल तोड़ा।',

				'2' : 'छोटे बच्चे पाठशाला जल्दी आयेंगे।',

				'3' : 'मेहनत का फल मीठा होता है।',

				'4' : 'वाह! वह खूबसूरत है।',

				'5' : 'पेड़ से पत्ते गिर गए।',
			}

/*var Englishpos = {

					'1' : ["Determiner" , "Noun" , "Verb" , "Determiner" , "Noun"],

					'2' : ["Pronoun" , "Verb" , "Verb" , "Preposition" , "Determiner" , "Adjective" , "Noun"],

					'3' : ["Noun" , "Verb" , "Determiner" , "Noun" , "Preposition" , "Determiner" , "Noun"],

					'4' : ["Pronoun" , "Verb" , "Determiner" , "Noun" , "Adverb"],

					'5' : ["Noun" , "Verb" , "Determiner" , "Noun" , "Preposition" , "Noun" , "Noun."],
				 }*/

/*var pos = require(['pos'], function (pos) {}); 
var sentenceno = 0;
var EnglishTags = [];                                           
function getpos() {
	if (sentenceno != 0) {
		var j = English[String(sentenceno)];
		var words = new pos.Lexer().lex(j.substr(0,j.length-1)); 
	    var tagger = new pos.Tagger();
	    var taggedWords = tagger.tag(words);
	    var tags = "";                    
	    for (i in taggedWords) {                                         
	        var taggedWord = taggedWords[i];
	        var tag = taggedWord[1];

	        if(tag == "NN" || tag == "NNP" || tag == "NNS"){
	            tag = "Noun";
	        }
	        else if(tag == "VBN" || tag == "VBD"){
	            tag = "Verb";
	        }
	        else if(tag == "JJ" || tag == "JJS"){
	            tag = "Adjective";
	        }
	        else if(tag == "PRP" || tag == "PRP$"){
	            tag = "Pronoun";
	        }
	        else if(tag == "IN"){
	            tag = "Preposition";
	        }
	        else if(tag == "RB"){
	            tag = "Adverb";
	        }
	        else if(tag == "DT"){
	            tag = "Determiner";
	        }
	        tags += String(tag) + " ";
	    } 
	    EnglishTags.push(tags);
		}
	
}*/

var language = "";
var sentence = "";
var wrong = 0;

function sel() {
	language = document.getElementById('language').options[document.getElementById('language').selectedIndex].text;
	if(language == "---Select Language---"){
        alert('Select Language');
        return false;
    }

    else if (language == "English") {
    	document.getElementById("English").style.display = "initial";
        document.getElementById("Hindi").style.display = "none";
        document.getElementById("statement").innerHTML = "";
        document.getElementById("createtable").innerHTML = "";
        document.getElementById("submitdiv").innerHTML = "";
        document.getElementById("getansdiv").innerHTML = "";
    }

    else if (language == "Hindi") {
    	document.getElementById("English").style.display = "none";
    	document.getElementById("Hindi").style.display = "initial";
    	document.getElementById("statement").innerHTML = ""; 
    	document.getElementById("createtable").innerHTML = "";
    	document.getElementById("submitdiv").innerHTML = "";
    	document.getElementById("getansdiv").innerHTML = "";
    }
}

function selectsentence() {
	if (language == "English") {
		if (document.getElementById("English").options[document.getElementById("English").selectedIndex].value == "Nil") {
			alert("Select a sentence");
			return false;
		}
		else {
			document.getElementById("statement").innerHTML = "Select the POS tag for corresponding words";
			sentenceno = document.getElementById("English").selectedIndex;
			sentence = English[parseInt(document.getElementById("English").options[document.getElementById("English").selectedIndex].value)];
			document.getElementById("createtable").innerHTML = "";
			document.getElementById("submitdiv").innerHTML = "";
			table();
		}
	}
	else if (language == "Hindi") {
		if (document.getElementById("Hindi").options[document.getElementById("Hindi").selectedIndex].value == "Nill") {
			alert("Select a sentence");
			return false;
		}
		else {
			document.getElementById("statement").innerHTML = "Select the POS tag for corresponding words";
			sentence = Hindi[parseInt(document.getElementById("Hindi").options[document.getElementById("Hindi").selectedIndex].value)];
			document.getElementById("createtable").innerHTML = "";
			document.getElementById("submitdiv").innerHTML = "";
			table();
		}
	}
}

function table() {
	var table = document.getElementById("createtable");
	var headings = ["LEXICON", "POS", "", ""];
	console.log(table);
	var thead = table.createTHead();
	var row = thead.insertRow();

	for (var i of headings) {
		var th = document.createElement("th");
        th.appendChild(document.createTextNode(i));
        row.appendChild(th);
	}
	columns(table);
}

/*function columns(table) {
	sentence = sentence.substr(0,sentence.length-1);
	var arr = sentence.split(/[\s!]+/);
	var j = 0;
	for (var i of arr) {
		var row = table.insertRow();
		var cell = row.insertCell();
		cell.appendChild(document.createTextNode(i));
		cell.className = "words";

		if (language == "English") {
			cell = row.insertCell();
			var options = ["Noun","Pronoun","Verb","Adjective","Adverb","Determiner","Preposition","Conjunction","Interjection"];
			var select = document.createElement("select");
			select.id = "POS" + String(j);
			select.className = "selection";
			j += 1;

			for(var i of options) {
                var option = document.createElement("option");
                option.value = i;
                option.text = i;
                select.appendChild(option);
            }
            cell.appendChild(select);
		}

		else if (language == "Hindi") {
			cell = row.insertCell();
			var options = ["Noun","Pronoun","Verb","Adjective","Adverb","Determiner","Preposition","Conjunction","Interjection"];
			var select = document.createElement("select");
			select.id = "POS" + String(j);
			select.className = "selection";
			j += 1;

			for(var i of options) {
                var option = document.createElement("option");
                option.value = i;
                option.text = i;
                select.appendChild(option);
            }
            cell.appendChild(select);	
		}

		cell = row.insertCell();
        cell.appendChild(document.createTextNode(""));

        cell = row.insertCell();
        cell.appendChild(document.createTextNode(""));

	}
	var button = document.createElement('BUTTON');
	var text = document.createTextNode("Submit");
	button.appendChild(text);
	submitdiv.appendChild(button);
	button.addEventListener("click", check);
}

function check() {
	document.getElementById("getansdiv").innerHTML = "";
	wrong = 0;
	if (language == "English") {
		var index = parseInt(document.getElementById("English").options[document.getElementById("English").selectedIndex].value);
        var tags = Englishpos[sentenceno];
        var tablerows = document.getElementById("createtable").rows;
        var j = 0;
        for(var i = 1;i < tablerows.length;i++){
            var col = tablerows[i].cells;
            var chosen = document.getElementById('POS' + String(j)).options[document.getElementById('POS' + String(j)).selectedIndex].value;

            col[2].innerHTML = "";
            col[2].style.padding = "30px";
            if(chosen == tags[j]){
                img = document.createElement("img");
                img.src = 'right.png';
                img.id = String(j);
                img.style.height = "25px";
                img.style.width = "25px";
                img.setAttribute('id', 'image');
                col[2].appendChild(img);
            }
            else{
                img = document.createElement("img");
                img.src = 'wrong.png';
                img.id=String(j);
                img.style.height = "25px";
                img.style.width = "25px";
                img.setAttribute('id', 'image');
                col[2].appendChild(img);
                wrong=1;
            }
            j += 1
        }

        if(wrong == 1){
        	var button = document.createElement('BUTTON');
			var text = document.createTextNode("Get Answer");
			button.appendChild(text);
			getansdiv.appendChild(button);
			button.addEventListener("click", getanswer);
        }
        else{
            document.getElementById("getansdiv").style.display = "none";
        }
       
    }
    else if(language == "Hindi"){    
        var arr = sentence.split(/[\s]+/);
        var tags = [];
        for(var word of arr){
            if(word=="राम" || word=="सीता" || word=="फल" || word=="बच्चे" || word=="पाठशाला" || word=="मेहनत" || word=="पेड़" || word=="पत्ते"){
                tags.push("Noun");
            }
            else if(word=="ने" || word=="के" || word=="लिए" || word=="का" || word=="से"){
                tags.push("Postposition");
            }
            else if(word=="तोड़ा" || word=="आयेंगे" || word=="होता" || word=="है" || word=="गिर" || word=="गए"){
                tags.push("Verb");
            }
            else if(word=="छोटे" || word=="मीठा" || word=="खूबसूरत"){
                tags.push("Adjective");
            }
            else if(word=="जल्दी"){
                tags.push("Adverb");
            }
            else if(word=="वाह!"){
                tags.push("Interjection");
            }
            else if(word=="वह"){
                tags.push("Pronoun");
            }
        }

        var tablerows = document.getElementById("createtable").rows;
        var j = 0;
        for(var i=1;i<tablerows.length;i++){
            var col = tablerows[i].cells;
            var chosen = document.getElementById('POS' + String(j)).options[document.getElementById('POS' + String(j)).selectedIndex].value;

            col[2].innerHTML = "";
            col[2].style.padding = "30px";

            if(chosen == tags[j]){
                img = document.createElement("img");
                img.src = 'right.png';
                img.id=String(j);
                img.style.height = "25px";
                img.style.width = "25px";
                col[2].appendChild(img);
            }
            else{
                img = document.createElement("img");
                img.src = 'wrong.png';
                img.id=String(j);
                img.style.height = "25px";
                img.style.width = "25px";
                col[2].appendChild(img);
                wrong = 1;
            }
            j+=1
        }

        if(wrong == 1){
            var button = document.createElement('BUTTON');
			var text = document.createTextNode("Get Answer");
			button.appendChild(text);
			getansdiv.appendChild(button);
			button.addEventListener("click", getanswer);
        }
        else{
            document.getElementById("getansdiv").style.display = "none";
        }
    }

}

function getanswer() {
	if(wrong == 1){
		document.getElementById("getansdiv").innerHTML = "";
        var button = document.createElement('BUTTON');
		var text = document.createTextNode("Hide Answer");
		button.appendChild(text);
		getansdiv.appendChild(button);
		button.addEventListener("click", hideanswer);

        if(language == "English"){
            var index = parseInt(document.getElementById("English").options[document.getElementById("English").selectedIndex].value);
            var tags = Englishpos[sentenceno];
            var mytablerows = document.getElementById('createtable').rows;
            var j = 0;
            for(var i=1;i<mytablerows.length;i++){
                var col = mytablerows[i].cells;

                col[3].innerHTML = "";

                text = document.createTextNode(tags[j]);
                text.id = String(j+10);
                col[3].appendChild(text);

                j+=1
            }
        }
        else if(language == "Hindi"){

            var arr = sentence.split(/[\s]+/);
            var tablerows = document.getElementById("createtable").rows;
            var j = 0;
            for(var i=1;i<tablerows.length;i++){

                var col = tablerows[i].cells;

                col[3].innerHTML = "";

                var tag = "";
                word = arr[j];

                if(word=="राम" || word=="सीता" || word=="फल" || word=="बच्चे" || word=="पाठशाला" || word=="मेहनत" || word=="पेड़" || word=="पत्ते"){
                    tag="Noun";
                }
                else if(word=="ने" || word=="के" || word=="लिए" || word=="का" || word=="से"){
                    tag="Postposition";
                }
                else if(word=="तोड़ा" || word=="आयेंगे" || word=="होता" || word=="है" || word=="गिर" || word=="गए"){
                    tag="Verb";
                }
                else if(word=="छोटे" || word=="मीठा" || word=="खूबसूरत"){
                    tag="Adjective";
                }
                else if(word=="जल्दी"){
                    tag="Adverb";
                }
                else if(word=="वाह!"){
                    tag="Interjection";
                }
                else if(word=="वह"){
                    tag="Pronoun";
                }
                text = document.createTextNode(tag);
                text.id = String(j+10);
                col[3].appendChild(text);
                j+=1
            }
        }
    }
}

function hideanswer() {
	var tablerows = document.getElementById("createtable").rows;
    for(var i=1;i<tablerows.length;i++){
        var col = tablerows[i].cells;
        col[3].innerHTML = "";
    }
    document.getElementById("getansdiv").innerHTML = "";
    var button = document.createElement('BUTTON');
	var text = document.createTextNode("Get Answer");
	button.appendChild(text);
	getansdiv.appendChild(button);
	button.addEventListener("click", getanswer);
}*/