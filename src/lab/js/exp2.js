function Mono_Encrypt() {
    plaintext = document.getElementById("p").value.toLowerCase();  
    key = document.getElementById("key").value.toLowerCase().replace(/[^a-z]/g,""); 
    if(plaintext.length < 1){ alert("please enter some plaintext (letters and numbers only)"); return; }    
    if(key.length != 26){ alert("key must be 26 characters in length"); return; }
    ciphertext = ""; var re = /[a-z]/; 
    for(i=0; i<plaintext.length; i++){ 
        if(re.test(plaintext.charAt(i))) ciphertext += key.charAt(plaintext.charCodeAt(i)-97); 
        else  ciphertext += plaintext.charAt(i); 
    } 
    if(document.getElementById("punc").checked) 
        document.getElementById("c").value = ciphertext.replace(/[^a-z]/g,"").replace(/([a-z]{5})/g,"$1 "); 
    else 
        document.getElementById("c").value = ciphertext; 
} 
 
function Mono_Decrypt(f){ 
    ciphertext = document.getElementById("c").value.toLowerCase();  
    key = document.getElementById("key").value.toLowerCase().replace(/[^a-z]/g, ""); 
    if(ciphertext.length < 1){ alert("please enter some ciphertext (letters only)"); return; }    
    if(key.length != 26){ alert("key must be 26 characters in length"); return; }
    plaintext = ""; var re = /[a-z]/; 
    for(i=0; i<ciphertext.length; i++){ 
        if(re.test(ciphertext.charAt(i))) plaintext += String.fromCharCode(key.indexOf(ciphertext.charAt(i))+97); 
        else  plaintext += ciphertext.charAt(i); 
    } 
    document.getElementById("p").value = plaintext; 
} 
 
function Mono_GenRandKey(){ 
    var keychars = "abcdefghijklmnopqrstuvwxyz"; 
    var chars = keychars.split(""); 
    ret=""; lim = chars.length; 
    for(i=0; i<lim; i++){ 
        index = Math.floor(chars.length*Math.random()); 
        ret += chars[index]; 
        chars.splice(index,1); 
    } 
    document.getElementById("key").value = ret; 
}

var ciphers = ["dkxyvrh 1 - qegt vkr hxccwv keur: xuwdr wn cehrq nwvvwtp et vkr hwsrhcxto gwvk krh nwnvrh, gkrt nkr tevwdrn x vxuowtp, duevkrq gkwvr hxccwv gwvk x yedorv gxvdk hit yxnv. nkr leuuegn wv qegt x hxccwv keur gkrt niqqrtub nkr lxuun x uetp gxb ve x dihwein kxuu gwvk fxtb uedorq qeehn el xuu nwmrn. nkr lwtqn x nfxuu orb ve x qeeh vee nfxuu leh krh ve lwv, civ vkheipk gkwdk nkr nrrn xt xvvhxdvwsr pxhqrt. nkr vkrt qwndesrhn x cevvur uxcruurq 'qhwto fr', vkr detvrtvn el gkwdk dxinr krh ve nkhwto vee nfxuu ve hrxdk vkr orb. x dxor gwvk 'rxv fr' et wv dxinrn krh ve pheg ve nidk x vhrfrtqein nwmr krh krxq kwvn vkr drwuwtp.", "awbix ildxz kolf a dkzeplld afu zbjjbfm lf bj bz a rwkx iajxpobwwap zdlgbfm a ellgae. jex iajxpobwwap ykxzjblfz awbix afu zex audbjz jl exp ikppxfj buxfjbjt ipbzbz, ildolkfuxu rt exp bfarbwbjt jl pxdxdrxp a olxd. rxnlpx ipahwbfm ahat, jex iajxpobwwap jxwwz awbix jeaj lfx zbux ln jex dkzeplld hbww dagx exp jawwxp afu jex ljexp zbux hbww dagx exp zelpjxp. zex rpxagz lnn jhl obxixz npld jex dkzeplld. lfx zbux dagxz exp zepbfg zdawwxp jeaf xcxp, hebwx afljexp iakzxz exp fxig jl mplh ebme bfjl jex jpxxz, hexpx a obmxlf dbzjagxz exp nlp a zxpoxfj. hbje zldx xnnlpj, awbix rpbfmz expzxwn raig jl exp kzkaw exbmej. zex zjkdrwxz kolf a zdaww xzjajx afu kzxz jex dkzeplld jl pxaie a dlpx aooplopbajx exbmej."];
var solution_plaintext = ["Chapter 1 - Down the Rabbit Hole: Alice is bored sitting on the riverbank with her sister, when she notices a talking, clothed White Rabbit with a pocket watch run past. She follows it down a rabbit hole when suddenly she falls a long way to a curious hall with many locked doors of all sizes. She finds a small key to a door too small for her to fit, but through which she sees an attractive garden. She then discovers a bottle labelled 'DRINK ME', the contents of which cause her to shrink too small to reach the key. A cake with 'EAT ME' on it causes her to grow to such a tremendous size her head hits the ceiling.", "Alice comes upon a mushroom and sitting on it is a blue Caterpillar smoking a hookah. The Caterpillar questions Alice and she admits to her current identity crisis, compounded by her inability to remember a poem. Before crawling away, the caterpillar tells Alice that one side of the mushroom will make her taller and the other side will make her shorter. She breaks off two pieces from the mushroom. One side makes her shrink smaller than ever, while another causes her neck to grow high into the trees, where a pigeon mistakes her for a serpent. With some effort, Alice brings herself back to her usual height. She stumbles upon a small estate and uses the mushroom to reach a more appropriate height."];
var keys = ["xcdqrlpkwzoufteyahnvisgjbm", "ariuxnmebsgwdfloypzjkchvtq"];
var current_cipher=-1;
function Next_Mono_Test() {
    current_cipher = current_cipher+1;
    if (current_cipher > (ciphers.length-1)) {
	current_cipher=0;
    }
    document.getElementById("textarea").value = ciphers[current_cipher].toLowerCase();
}

function CalculateFreq() {
    var cipherText = document.getElementById("textarea").value.toLowerCase();
    var freq = new Array(26);
    for (var i=0; i<26; i++) {
	freq[i] = 0;
    }
    var astring = "a";
    var charValOfA = astring.charCodeAt(0);
    for (var i=0; i<cipherText.length; i++) {
	var index = cipherText.charCodeAt(i)-charValOfA;
        if(index>=0 && index <= 26) {
	    freq[index]++;
	}
    }
    var totalChars = 0;
    for (var i=0; i<26; i++) {
	totalChars += freq[i];
    }
   
    var output = "<table border='0'; cellspacing='1'; bgcolor='black'; cellpadding='3';><tr>";
    for (var i=0; i<13; i++) {
	output += "<td bgcolor='white'; style=\"width:20px\"><b>";
	output += String.fromCharCode(i+charValOfA);
	output += "</b></td> ";
    }
    output += "</tr><tr>";
    for (var i=0; i<13; i++) {
	output += "<td bgcolor='white'; style=\"width:20px\">";
	var num = (freq[i]/totalChars);
	output += (Math.round((num)*100000))/1000;
	if (num == 0) {
	    output += ".000"
	}
	output += "</td> ";
    }
    output += "</tr><tr>";
    for (var i=13; i<26; i++) {
	output += "<td bgcolor='white'; style=\"width:20px\"><b>";
	output += String.fromCharCode(i+charValOfA);
	output += "</b></td> ";
    }
    output += "</tr><tr>";
    for (var i=13; i<26; i++) {
	output += "<td bgcolor='white'; style=\"width:20px\">";
	var num = (freq[i]/totalChars);
	output += (Math.round((num)*100000))/1000;
	if (num == 0) {
	    output += ".000"
	}
	output += "</td> ";
    }
    output += "</tr></table>";
    document.getElementById("cipherFreq").innerHTML = output;
}

function Reset() {
    document.getElementById("textarea2").value = document.getElementById("textarea").value;
    document.getElementById("replacements").innerHTML = "";
}

function ModifyUserText() {
    var userText = document.getElementById("textarea2").value;
    var initChar = document.getElementById("char1").value.toLowerCase(); 
    var finalChar = document.getElementById("char2").value.toUpperCase(); 
    var output = "";
    for (var i=0; i<userText.length; i++) {
	if(userText.charAt(i) == initChar) {
	    output += finalChar;
	} else {
	    output += userText.charAt(i);
        }
    }
    var replacement_notification = "You replaced " + initChar + " by " + finalChar + "\n";
    document.getElementById("replacements").innerHTML += replacement_notification;
    document.getElementById("textarea2").value = output;
}

function ModifyUserText2() {
    var userText = document.getElementById("textarea2").value;
    var initChar = document.getElementById("char3").value; 
    var finalChar = document.getElementById("char4").value; 
    var output = "";
    for (var i=0; i<userText.length; i++) {
	if(userText.charAt(i) == initChar) {
	    output += finalChar;
	} else if (userText.charAt(i) == finalChar) {
	    output += initChar;
	} else {
	    output += userText.charAt(i);
        }
    }
    var replacement_notification = "You replaced " + initChar + " by " + finalChar + "\n";
    document.getElementById("replacements").innerHTML += replacement_notification;
    document.getElementById("textarea2").value = output;
}

function checkAnswer() {
    var userText = document.getElementById("textarea2").value.toLowerCase();
    var initChar = document.getElementById("char3").value.toLowerCase();
    if (document.getElementById("textarea3").value.toLowerCase() == solution_plaintext[current_cipher].toLowerCase() && document.getElementById("key2").value.toLowerCase() == keys[current_cipher].toLowerCase()) {
                document.getElementById("notification").value = "CORRECT!!";
        } else {
                document.getElementById("notification").value = "This is not correct, Please try again!";
        }
}  
