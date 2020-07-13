var sentence = '{"English":['+
    '{"a":"John ate an apple before afternoon", "b":"before afternoon John ate an apple", "c":"John before afternoon ate an apple"},' +
    '{"a":"some students like to study in the night", "b":"in the night some students like to study"},' +
    '{"a":"John and Mary went to church", "b":"Mary and John went to church"},'+
    '{"a":"John went to church after eating", "b":"after eating John went to church","c":"John after eating went to church"},' +
    '{"a":"did he go to market", "b":"he did go to market"},' +
    '{"a":"the woman who called my sister sells cosmetics", "b":"the woman who sells cosmetics called my sister",'+
        '"c":"my sister who sells cosmetics called the woman", "d":"my sister who called the woman sells cosmetics"},'+
    '{"a":"John goes to the library and studies", "b":"John studies and goes to the library"},'+
    '{"a":"John ate an apple so did she", "b":"she ate an apple so did John"},'+
    '{"a":"the teacher returned the book after she noticed the error", "b":"the teacher noticed the error after she returned the book",'+
        '"c":"after the teacher returned the book she noticed the error", "d":"after the teacher noticed the error she returned the book",'+
        '"e":"she returned the book after the teacher noticed the error", "f":"she noticed the error after the teacher returned the book",'+
        '"g":"after she returned the book the teacher noticed the error", "h":"after she noticed the error the teacher returned the book"},'+
    '{"a":"I told her that I bought a book yesterday", "b":"I told her yesterday that I bought a book", "c":"yesterday I told her that I bought a book",'+
        '"d":"I bought a book that I told her yesterday", "e":"I bought a book yesterday that I told her", "f":"yesterday I bought a book that I told her"}],'+
    
    '"Hindi":[' +
    '{"a":"राम और श्याम बाजार गयें", "b":"राम और श्याम गयें बाजार", "c":"बाजार गयें राम और श्याम", "d":"गयें बाजार राम और श्याम"},'+
    '{"a":"राम सोया और श्याम भी", "b":"श्याम सोया और राम भी", "c":"सोया श्याम और राम भी", "d":"सोया राम और श्याम भी"},'+
    '{"a":"मैंने उसे बताया कि राम सो रहा है", "b":"मैंने उसे बताया कि सो रहा है राम", "c":"उसे मैंने बताया कि राम सो रहा है", "d":"उसे मैंने बताया कि सो रहा है राम",'+
        '"e":"मैंने बताया उसे कि राम सो रहा है", "f":"मैंने बताया उसे कि सो रहा है राम", "g":"उसे बताया मैंने कि राम सो रहा है", "h":"उसे बताया मैंने कि सो रहा है राम",'+
        '"i":"बताया मैंने उसे कि राम सो रहा है", "j":"बताया मैंने उसे कि सो रहा है राम", "k":"बताया उसे मैंने कि राम सो रहा है", "l":"बताया उसे मैंने कि सो रहा है राम"},'+
    '{"a":"राम खाकर सोया", "b":"खाकर राम सोया", "c":"राम सोया खाकर", "d":"खाकर सोया राम", "e":"सोया राम खाकर", "f":"सोया खाकर राम"},'+
    '{"a":"बिल्लियों को मारकर कुत्ता सो गया", "b":"मारकर बिल्लियों को कुत्ता सो गया", "c":"बिल्लियों को मारकर सो गया कुत्ता", "d":"मारकर बिल्लियों को सो गया कुत्ता",'+
        '"e":"कुत्ता सो गया बिल्लियों को मारकर", "f":"कुत्ता सो गया मारकर बिल्लियों को", "g":"सो गया कुत्ता बिल्लियों को मारकर", "h":"सो गया कुत्ता मारकर बिल्लियों को"},'+
    '{"a":"एक लाल किताब वहाँ है", "b":"एक लाल किताब है वहाँ", "c":"वहाँ है एक लाल किताब", "d":"है वहाँ एक लाल किताब"},'+
    '{"a":"एक बड़ी सी किताब वहाँ है", "b":"एक बड़ी सी किताब है वहाँ", "c":"बड़ी सी एक किताब वहाँ है", "d":"बड़ी सी एक किताब है वहाँ", "e":"वहाँ है एक बड़ी सी किताब",'+
        '"f":"वहाँ है बड़ी सी एक किताब", "g":"है वहाँ एक बड़ी सी किताब", "h":"है वहाँ बड़ी सी एक किताब"}]}';   


var selection="";
var cur_sent = "";
var form_sent = "";
var word_array ;
var ques = 0;
var count=0;
var sentences = JSON.parse(sentence);

function dropdown(){
    clear();
    selection = document.getElementById('selection').options[document.getElementById('selection').selectedIndex].text;
    if(selection == "---Select Language---"){
        alert('Select a Language');
        set_display("none");
        return false;
    }
    else if(selection == "English" || selection == "Hindi"){
        set_display("initial");
        document.getElementById("line1").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words";
        document.getElementById("line2").innerHTML = "(select the buttons in proper order)";
        select_sentence(selection);
    }
}

function select_sentence(selection){
    document.getElementById('new-sentence').innerHTML = "";
    if(selection == "English"){
        ques = Math.floor(Math.random() * 10);
        cur_sent = sentences.English[ques].a;
        sentence_buttons( sentences.English[ques].a );
    }
    else if(selection == "Hindi"){
        ques = Math.floor(Math.random()*7);
        cur_sent = sentences.Hindi[ques].a;
        sentence_buttons( sentences.Hindi[ques].a );
    }
}

function sentence_buttons( str ){
    var arr = str.split(" ");
    word_array = shuffle(arr);
    add_buttons(word_array);
}

function add_buttons(arr){
    var j = "1";
    for(i=0;i<arr.length;i++){
        var button = document.createElement("button");
        button.setAttribute("id",j);
        button.setAttribute("value",arr[i]);
        j += String(parseFloat(j) + 1);
        button.innerHTML = arr[i];
        document.getElementById('new-sentence').appendChild(button);
    }
    document.getElementById('form-sent').value = String();
    count=0;
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function second_message(id1){
    if(id1=="new-sentence")
       return;
    document.getElementById('second-msg').innerHTML = "Formed Sentence ";
    document.getElementById('second-line').innerHTML = "(after selecting words):";
    document.getElementById("reform-button").style.display = "initial";
}

function a(id1){
    if(id1 == "new-sentence")
        return ;
        if(count == 0){
            document.getElementById('form-sent').innerHTML = String( document.getElementById(id1).value );
        }
        else{
    document.getElementById('form-sent').innerHTML = String( document.getElementById('form-sent').innerHTML ) + " " + String( document.getElementById(id1).value );
        }
    form_sent = document.getElementById('form-sent').innerHTML;
    document.getElementById(id1).style.display = "none";
    count += 1;
   if(count == word_array.length){
        document.getElementById("check-correctness").style.display = "initial";
    }
}

function reform(){
    clear();
    document.getElementById('new-sentence').innerHTML = "";
    add_buttons(word_array);
}

function clear(){
    document.getElementById("second-msg").innerHTML = "";
    document.getElementById("second-line").innerHTML = "";
    document.getElementById('form-sent').innerHTML = "";
    document.getElementById("reform-button").style.display = "none";
    document.getElementById("check-correctness").style.display = "none";
    document.getElementById('correctanswer').style.display = "none";
    document.getElementById('wronganswer').style.display = "none";
    document.getElementById('correct-sentence').style.display= "none";
    document.getElementById('correct-sentences').innerHTML = "Get correct sentence";
    document.getElementById('correct-sentence').innerHTML = "";
}

function set_display(val){
    document.getElementById("line1").style.display = val;
    document.getElementById("line2").style.display = val;
    document.getElementById("new-sentence").style.display = val;
    document.getElementById("second-msg").style.display = val;
    document.getElementById("second-line").style.display = val;
}

function sent_check(){
    var status = false;
    if(selection == "English"){
        for(sent in sentences.English[ques]){
            if(sentences.English[ques][sent] == form_sent){
                 status = true;
                break;
            }
        }
        if(status == true){
            document.getElementById('correctanswer').style.display = "initial";
        }
        else {
            document.getElementById('wronganswer').style.display = "initial";
            document.getElementById('correct-sentences').style.display="initial"
        }
        return ;
    }
    else if(selection == "Hindi"){
        for(sent in sentences.Hindi[ques]){
            if(sentences.Hindi[ques][sent] == form_sent){
                status = true;
                break;
            }
        }

        if(status == true){
            document.getElementById('correctanswer').style.display = "initial";
        }
        else{
            document.getElementById('wronganswer').style.display = "initial";
            document.getElementById('correct-sentences').style.display="initial";
        }
        return true;
    }
}

function correctsent(){
    document.getElementById('correct-sentence').style.display = "initial";
    var req = document.getElementById('correct-sentences').innerHTML;
    if(req == "Get correct Sentence" || req=="Get answers"){
        document.getElementById('correct-sentences').innerHTML = "Hide the correct Sentence";
        if(selection == "English"){
            for(sent in sentences.English[ques]){
                var t = document.createTextNode(sentences.English[ques][sent]);
                document.getElementById('correct-sentence').appendChild(t);
                var line = document.createElement("br");
                document.getElementById('correct-sentence').appendChild(line);
            }
            return;
        }
        else if(selection == "Hindi"){
            for(sent in sentences.Hindi[ques]){
                var t = document.createTextNode(sentences.Hindi[ques][sent]);
                document.getElementById('correct-sentence').appendChild(t);
                var line = document.createElement("br");
                document.getElementById('correct-sentence').appendChild(line);
            }
            return;
        }
    }
    else if(req == "Hide the correct Sentence"){
        document.getElementById('correct-sentences').innerHTML = "Get answers";
        document.getElementById('correct-sentence').innerHTML = "";
    }
}