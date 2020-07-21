
corpus1='A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. "How shall I climb out?" said the mouse. "oh, how shall I climb out?" Just then a rat came along, and he heard the mouse. "Mouse," said the rat, "if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in.'
corpus2='A wolf carried off a lamb. The lamb said, "I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself." The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.'
corpus3='A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. "Why does he not make a pet of me?" said the donkey. "It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master\'s knee. It is not fair." Then the donkey said to himself, "If I do what the dog does, he may make a pet of me." So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master\'s knee. The master thought the donkey was mad, and he shouted, "Help! Help!" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. "I only did what the dog does," said the donkey," and yet they make a pet of the dog, and they beat me with sticks. It is not fair.'

const stemmer = new Snowball('English');
stemmer.setCurrent('abbreviations');     
stemmer.stem();
console.log(stemmer.getCurrent()); 

function dropdown()
{
    var x=document.getElementById("selection").value;
    if(x=='corpus1'){
        document.getElementById('answer').innerHTML="";
		document.getElementById("submit").innerHTML="";
        document.getElementById("submitBtn1").innerHTML="";
        document.getElementById('continue').innerHTML="";
        document.getElementById('tab1').innerHTML="";
		document.getElementById("corp").innerHTML=corpus1;
		document.getElementById("display").innerHTML="Enter the correct number of tokens and types from the corpus:";
		document.getElementById("tab").innerHTML="<table><tr><td>"+"#tokens"+"</td><td>"+"<input id='token' type='text'>"+"</td></tr><tr><td>"+"#types"+"</td><td>"+"<input id='types' type='text'>"+"</td></tr></table>";
		document.getElementById("submit").innerHTML="<button onclick='compare(corpus1)'>Submit</button>"
	}
	if(x=='corpus2'){
        document.getElementById('answer').innerHTML="";
		document.getElementById("submit").innerHTML="";
        document.getElementById('continue').innerHTML="";
        document.getElementById('tab1').innerHTML="";
        document.getElementById("submitBtn1").innerHTML="";
		document.getElementById("corp").innerHTML=corpus2;
		document.getElementById("display").innerHTML="Enter the correct number of tokens and types from the corpus:";
		document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML="<table><tr><td>"+"#tokens"+"</td><td>"+"<input id='token' type='text'>"+"</td></tr><tr><td>"+"#types"+"</td><td>"+"<input id='types' type='text'>"+"</td></tr></table>";
		document.getElementById("submit").innerHTML="<button onclick='compare(corpus2)'>Submit</button>"
	}
	if(x=='corpus3'){
        document.getElementById('answer').innerHTML="";
		document.getElementById("submit").innerHTML="";
        document.getElementById('continue').innerHTML="";
        document.getElementById('tab1').innerHTML="";
        document.getElementById("submitBtn1").innerHTML="";
		document.getElementById("corp").innerHTML=corpus3;
		document.getElementById("display").innerHTML="Enter the correct number of tokens and types from the corpus:";
	    document.getElementById("tab").innerHTML="<table><tr><td>"+"#tokens"+"</td><td>"+"<input id='token' type='text'>"+"</td></tr><tr><td>"+"#types"+"</td><td>"+"<input id='types' type='text'>"+"</td></tr></table>";
		document.getElementById("submit").innerHTML="<button onclick='compare(corpus3)'>Submit</button>"
	}
}
function tokens(str){
	str=str.replace(/[^a-zA-Z ]/g, "")
	str = str.split(" ");
	return str.length;
}
function types(str){
	str=str.replace(/[^a-zA-Z ]/g, "")
	str= str.toLowerCase();
	str = str.split(" ");
	var unique = str.filter(uniqueWords);
	return unique.length;
}
function uniqueWords(value, index, self) { 
    return self.indexOf(value) === index;
}
function compare(corp){
	document.getElementById('continue').innerHTML="";
	var token= document.getElementById('token').value;
	var type1= document.getElementById('types').value;
	var x=document.getElementById('token').innerHTML;
	if(token== tokens(corp) && type1== types(corp)){
		document.getElementById('answer').innerHTML="Right answer!";
		document.getElementById('token').style.backgroundColor="green";
		document.getElementById('types').style.backgroundColor="green";
		document.getElementById('continue').innerHTML="<button onclick='newTypes()'>continue</button>";
	}
	if(token== tokens(corp) && type1!= types(corp)){
		document.getElementById('answer').innerHTML="Wrong answer!";
		document.getElementById('token').style.backgroundColor="green";
		document.getElementById('types').style.backgroundColor="red";
	}
	if(token!= tokens(corp) && type1== types(corp)){
		document.getElementById('answer').innerHTML="Wrong answer!";
		document.getElementById('token').style.backgroundColor="red";
		document.getElementById('types').style.backgroundColor="green";
	}
	if(token!= tokens(corp) && type1!= types(corp)){
		document.getElementById('answer').innerHTML="Wrong answer!";
		document.getElementById('token').style.backgroundColor="red";
		document.getElementById('types').style.backgroundColor="red";
    }
}
function newTypes(){
	document.getElementById('answer').innerHTML="Now, consider all the tokens with the same 'root' word to be of the same type. Recalculate the number of types";
	document.getElementById("submit").innerHTML="";
	document.getElementById('continue').innerHTML="#New types:";
	document.getElementById('tab1').innerHTML="<input id='newtype' type=text>";
	var x=document.getElementById("selection").value;
	if(x=='corpus1'){
	       document.getElementById("submitBtn1").innerHTML="<button onclick='newSubmit(corpus1)'>Submit</button>"
    }
   if(x=='corpus2'){
	    document.getElementById("submitBtn1").innerHTML="<button onclick='newSubmit(corpus2)'>Submit</button>"
    }
   if(x=='corpus3'){
	 document.getElementById("submitBtn1").innerHTML="<button onclick='newSubmit(corpus3)'>Submit</button>"
    }
 }

  function newSubmit(str){
     str=str.replace(/[^a-zA-Z ]/g, "");
     str= str.toLowerCase();
	 str = str.split(" ");
	 var s=[];
	 for(var i=0; i<str.length;i++){
		stemmer.setCurrent(str[i]);     
		stemmer.stem();
		s.push(stemmer.getCurrent());
	 }
	 var unique = s.filter(uniqueWords);
	alert(unique.length);
    }