var Corpus = {
			   '1' : 'A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. " How shall I climb out?" said the mouse. "oh, how shall I climb out?" Just then a rat came along, and he heard the mouse. "Mouse," said the rat, "if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in."',

			   '2' : 'A wolf carried off a lamb. The lamb said, " I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself." The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.',
			   
			   '3' : 'A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. "Why does he not make a pet of me?" said the donkey. "It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master\'s knee. It is not fair." Then the donkey said to himself, "If I do what the dog does, he may make a pet of me." So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master\'s knee. The master thought the donkey was mad, and he shouted, "Help! Help!" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. "I only did what the dog does," said the donkey," and yet they make a pet of the dog, and they beat me with sticks. It is not fair."'
             }

//var Snowball = require('snowball');
var stemmer = new Snowball('English');
var c = 0;
var n = 0;
function sel() {
	corpus = document.getElementById('corpus').options[document.getElementById('corpus').selectedIndex].text;
	if (corpus == "---Select a corpus---") {
		alert("Select a corpus");
		return false;
	}

	else if (corpus == "Corpus 1") {
		c = 1;
		document.getElementById("submitdiv").innerHTML = "";
		document.getElementById("token").value = "";
		document.getElementById("token").style.backgroundColor = "white";
		document.getElementById("type").value = "";
		document.getElementById("type").style.backgroundColor = "white";
		document.getElementById("ansdiv").innerHTML = "";
		document.getElementById("newtypediv").innerHTML = "";
		document.getElementById("newtypes").innerHTML = "";
		document.getElementById("newtypestext").value = "";
		document.getElementById("newtypestext").style.display = "none";
		document.getElementById("newtypestext").style.backgroundColor = "white";
		document.getElementById("newsubmitdiv").innerHTML = "";
		document.getElementById("newansdiv").innerHTML = "";
		document.getElementById("corpuses").innerHTML = Corpus['1'];
	}

	else if (corpus == "Corpus 2") {
		c = 2;
		document.getElementById("submitdiv").innerHTML = "";
		document.getElementById("token").value = "";
		document.getElementById("token").style.backgroundColor = "white";
		document.getElementById("type").value = "";
		document.getElementById("type").style.backgroundColor = "white";
		document.getElementById("ansdiv").innerHTML = "";
		document.getElementById("newtypediv").innerHTML = "";
		document.getElementById("newtypes").innerHTML = "";
		document.getElementById("newtypestext").value = "";
		document.getElementById("newtypestext").style.display = "none";
		document.getElementById("newtypestext").style.backgroundColor = "white";
		document.getElementById("newsubmitdiv").innerHTML = "";
		document.getElementById("newansdiv").innerHTML = "";
		document.getElementById("corpuses").innerHTML = Corpus['2'];
	}

	else if (corpus == "Corpus 3") {
		c = 3;
		document.getElementById("submitdiv").innerHTML = "";
		document.getElementById("token").value = "";
		document.getElementById("token").style.backgroundColor = "white";
		document.getElementById("type").value = "";
		document.getElementById("type").style.backgroundColor = "white";
		document.getElementById("ansdiv").innerHTML = "";
		document.getElementById("newtypediv").innerHTML = "";
		document.getElementById("newtypes").innerHTML = "";
		document.getElementById("newtypestext").value = "";
		document.getElementById("newtypestext").style.display = "none";
		document.getElementById("newtypestext").style.backgroundColor = "white";
		document.getElementById("newsubmitdiv").innerHTML = "";
		document.getElementById("newansdiv").innerHTML = "";
		document.getElementById("corpuses").innerHTML = Corpus['3'];
	}

	table();
}

function table() {
	document.getElementById("table").innerHTML = "Enter the number of tokens and types for the above corpus:";
	document.getElementById("createtable").style.display = "initial";
    var button = document.createElement('BUTTON');
	var text = document.createTextNode("Submit");
	button.appendChild(text);
	submitdiv.appendChild(button);
	button.addEventListener("click", check);
}

function check() {
	var a = document.getElementById("token").value;
	var b = document.getElementById("type").value;
	console.log(a);
	console.log(b);
	if (c == 1) {
		if (a == '169' && b == '80') {
			document.getElementById("token").style.backgroundColor = "green";
			document.getElementById("type").style.backgroundColor = "green";
			document.getElementById("ansdiv").innerHTML = "Right Answer";
			document.getElementById("ansdiv").style.color = "green";
			var button = document.createElement('BUTTON');
			var text = document.createTextNode("Continue");
			button.appendChild(text);
			buttondiv.appendChild(button);
			button.addEventListener("click", newtypes);
		}
		else if (a == '169' && b != '80') {
			document.getElementById("token").style.backgroundColor = "green";
			document.getElementById("type").style.backgroundColor = "red";
			document.getElementById("ansdiv").innerHTML = "Wrong Answer";
			document.getElementById("ansdiv").style.color = "red";
		}
		else if (a != '169' && b == '80') {
			document.getElementById("token").style.backgroundColor = "red";
			document.getElementById("type").style.backgroundColor = "green";
			document.getElementById("ansdiv").innerHTML = "Wrong Answer";
			document.getElementById("ansdiv").style.color = "red";
		}
		else {
			document.getElementById("token").style.backgroundColor = "red";
			document.getElementById("type").style.backgroundColor = "red";
			document.getElementById("ansdiv").innerHTML = "Wrong Answer";
			document.getElementById("ansdiv").style.color = "red";
		}
	}
	if (c == 2) {
		if (a == '111' && b == '65') {
			document.getElementById("token").style.backgroundColor = "green";
			document.getElementById("type").style.backgroundColor = "green";
			document.getElementById("ansdiv").innerHTML = "Right Answer";
			document.getElementById("ansdiv").style.color = "green";
			var button = document.createElement('BUTTON');
			var text = document.createTextNode("Continue");
			button.appendChild(text);
			buttondiv.appendChild(button);
			button.addEventListener("click", newtypes);
		}
		else if (a == '111' && b != '65') {
			document.getElementById("token").style.backgroundColor = "green";
			document.getElementById("type").style.backgroundColor = "red";
			document.getElementById("ansdiv").innerHTML = "Wrong Answer";
			document.getElementById("ansdiv").style.color = "red";
		}
		else if (a != '111' && b == '65') {
			document.getElementById("token").style.backgroundColor = "red";
			document.getElementById("type").style.backgroundColor = "green";
			document.getElementById("ansdiv").innerHTML = "Wrong Answer";
			document.getElementById("ansdiv").style.color = "red";
		}
		else {
			document.getElementById("token").style.backgroundColor = "red";
			document.getElementById("type").style.backgroundColor = "red";
			document.getElementById("ansdiv").innerHTML = "Wrong Answer";
			document.getElementById("ansdiv").style.color = "red";
		}
	}
	if (c == 3) {
		if (a == '219' && b == '95') {
			document.getElementById("token").style.backgroundColor = "green";
			document.getElementById("type").style.backgroundColor = "green";
			document.getElementById("ansdiv").innerHTML = "Right Answer";
			document.getElementById("ansdiv").style.color = "green";
			var button = document.createElement('BUTTON');
			var text = document.createTextNode("Continue");
			button.appendChild(text);
			buttondiv.appendChild(button);
			button.addEventListener("click", newtypes);
		}
		else if (a == '219' && b != '95') {
			document.getElementById("token").style.backgroundColor = "green";
			document.getElementById("type").style.backgroundColor = "red";
			document.getElementById("ansdiv").innerHTML = "Wrong Answer";
			document.getElementById("ansdiv").style.color = "red";
		}
		else if (a != '219' && b == '95') {
			document.getElementById("token").style.backgroundColor = "red";
			document.getElementById("type").style.backgroundColor = "green";
			document.getElementById("ansdiv").innerHTML = "Wrong Answer";
			document.getElementById("ansdiv").style.color = "red";
		}
		else {
			document.getElementById("token").style.backgroundColor = "red";
			document.getElementById("type").style.backgroundColor = "red";
			document.getElementById("ansdiv").innerHTML = "Wrong Answer";
			document.getElementById("ansdiv").style.color = "red";
		}
	}
	stemmedcorpus();
}

function stemmedcorpus(){
	var paragraph = Corpus[c];
	console.log(paragraph);
	paragraph = paragraph.toLowerCase();
    var stemmed = [];
    var arr = paragraph.split(/[\s,.?\"]+/);
    
    for(var i=0; i<arr.length-1 ; i++){
        stemmer.setCurrent(arr[i]);
        stemmer.stem();
        stemmed.push(stemmer.getCurrent()); 
    }
    stemmed = new Set(stemmed);
    stemmed = Array.from(stemmed);
    stemmedtypes = stemmed.length;        
    console.log(stemmedtypes); 
    n = stemmedtypes;
}

/*function newtypes() {
	document.getElementById("submitdiv").innerHTML = "";
	document.getElementById("ansdiv").innerHTML = "";
	document.getElementById("buttondiv").innerHTML = "";
	document.getElementById("newtypediv").innerHTML = "Now, consider all the tokens with the same 'root' word to be of the same type. Recalculate the number of types.";
	document.getElementById("newtypes").innerHTML = "#new types:";
	document.getElementById("newtypestext").style.display = "initial";
	var button = document.createElement('BUTTON');
	var text = document.createTextNode("Submit");
	button.appendChild(text);
	newsubmitdiv.appendChild(button);
	button.addEventListener("click", newcheck);
}

function newcheck() {
	var a = document.getElementById("newtypestext").value;
	if (a == n) {
		document.getElementById("newtypestext").style.backgroundColor = "green";
		document.getElementById("newansdiv").innerHTML = "Right Answer";
		document.getElementById("newansdiv").style.color = "green";
	}
	else {
		document.getElementById("newtypestext").style.backgroundColor = "red";
		document.getElementById("newansdiv").innerHTML = "Wrong Answer";
		document.getElementById("newansdiv").style.color = "red";
	}
}*/

/* Continue button created */