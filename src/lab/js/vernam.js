var PLAIN_TEXT_LEN = 8;
var current_encryption = "";

function validKey() {
    key = document.getElementById("user_key").value;
    var i = 0;
    for(i=0; i<key.length; i++){
	if (key.charAt(i) != "0" && key.charAt(i)!= "1") {
	    break;
	}
    }
    if (i != key.length) {
	alert("Only binary keys allowed!");
    }
}

function XOR(a, b) {
    if((a == "0" && b == "0"))
        return "0";
    else if((a == "0" && b == "1"))
        return "1";
    else if((a == "1" && b == "0"))
        return "1";
    else if((a == "1" && b == "1"))
        return "0";
    return "0";
}

function EQV(a, b) {
    if((a == "0" && b == "0"))
        return "1";
    else if((a == "0" && b == "1"))
        return "0";
    else if((a == "1" && b == "0"))
        return "0";
    else if((a == "1" && b == "1"))
        return "1";
    return "1";
}

function AND(a, b) {
    if((a == "0" && b == "0"))
        return "0";
    else if((a == "0" && b == "1"))
        return "0";
    else if((a == "1" && b == "0"))
        return "0";
    else if((a == "1" && b == "1"))
        return "1";
    return "0";
}

function Vernam_Encrypt() {
    plaintext = document.getElementById("p").value;
    key = document.getElementById("key").value;
    if(plaintext.length < 1){ alert("please enter some plaintext (binary only)"); return; }
    if(key.length < plaintext.length){ alert("key must be atleast the length of plaintext"); return; }
    ciphertext = "";
    for(i=0; i<plaintext.length; i++){
        ciphertext += XOR(plaintext.charAt(i), key.charAt(i));
    }
    document.getElementById("c").value = ciphertext;
}

function Vernam_Decrypt(f){
    ciphertext = document.getElementById("c").value;
    key = document.getElementById("key").value;
    if(ciphertext.length < 1){ alert("please enter some ciphertext (binary only)"); return; }
    if(key.length < ciphertext.length){ alert("key must be atleast the length of ciphertext"); return; }
    plaintext = "";
    for(i=0; i<ciphertext.length; i++){
        plaintext += XOR(ciphertext.charAt(i), key.charAt(i));
    }
    document.getElementById("p").value = plaintext;
}
 
function Vernam_RandSequence(len){ 
    var keylen = len; 
    ret=""; 
    for(i=0; i<keylen; i++) {
        ret += (Math.ceil(Math.random()*1000000))%2; 
    } 
    return ret;
}

function makeEqualProbability(seq) {
    var eq_seq = "";
    for(i=0;i<seq.length;i++) {
        if((seq.charAt(i) == "0")) {
	    eq_seq += "01";
	}
	else {
	    eq_seq += "10";
	}
    }
    return eq_seq;
}

function Vernam_RandKey(){
    plaintext = document.getElementById("p").value;
    ciphertext = document.getElementById("c").value;
    var keylen;
    if (plaintext.length > ciphertext.length) {
	keylen = plaintext.length;
    }
    else {
	keylen = ciphertext.length;
    }
    document.getElementById("key").value = Vernam_RandSequence(keylen); 
}

function equalProbabilitySequence(len) {
    randomSeq = Vernam_RandSequence(len);
    equalProbSeq = makeEqualProbability(randomSeq);
    seq = "";
    for(i=0;i<len;i++) {
	seq += equalProbSeq.charAt(i);
    }
    return seq;
}

function shrink_key(key) {
    var new_key = "";
    for(i=0;i<PLAIN_TEXT_LEN;i++) {
	new_key += key.charAt(i);
    }
    return new_key;
}

function expand_key(key) {
    var index = 0;
    while (key.length < PLAIN_TEXT_LEN) {
	key += key.charAt(index);
	index ++;
    }
    return key;
}

function resize_key(key) {
    var key_len = key.length;
    if (key_len > PLAIN_TEXT_LEN) {
	key = shrink_key(key);
    }
    else if (key_len < PLAIN_TEXT_LEN) {
	key = expand_key(key);
    }
    return key;
}

function encrypt(plaintext, key) {
    key = resize_key(key);
    //encrypt the plaintext with the key now.
    var cipher_text = "";
    var encryption_technique = current_encryption;
    var i = 0;
    for(i=0;i<PLAIN_TEXT_LEN;i++) {
	if(encryption_technique.charAt(i) == "0") {
	    cipher_text += XOR(plaintext.charAt(i), key.charAt(i));
	}
	else {
	    cipher_text += AND(plaintext.charAt(i), key.charAt(i));
	}
    }
    return cipher_text;
}

function Next_Encryption() {
    current_encryption = Vernam_RandSequence(PLAIN_TEXT_LEN);
}


function next_plain_text() {
    document.getElementById("plainarea").value = Vernam_RandSequence(PLAIN_TEXT_LEN);
}

function next_key() {
    key_len = (Math.random()*100000)%7 + 6;
    document.getElementById("keyarea_gen").value = Vernam_RandSequence(key_len);
}

function check_key() {
    var key = document.getElementById("keyarea_gen").value;
    var zero = 0;
    var one = 0;
    if (key == "") {
	alert("Please calculate the new key with p=0.5");
	return;
    }
    for (i=0;i<key.length;i++) {
	if (key.charAt(i) == '0') {
	    zero ++;
	} else if (key.charAt(i) == '1') {
	    one ++;
	} else {
	    alert("Invalid Key. Please enter a binary key.");
    	    document.getElementById("keyarea_gen").value = "";
	}
    }
    if (zero == one) {
        document.getElementById("key_notify").value = "Correct Key! You may proceed.";
    } else {
        document.getElementById("key_notify").value = "Wrong Key!";
    }
}
 
function Encrypt_p() {
    var k = document.getElementById("keyarea_gen").value;
    if (k == "") {
	alert("Please calculate the new key with p=0.5");
	return;
    }
    document.getElementById("cipherarea").value = encrypt(document.getElementById("plainarea").value, k);
}

function Next_Vernam_Test() {
    document.getElementById("plainarea").value = Vernam_RandSequence(PLAIN_TEXT_LEN);
    key_len = (Math.random()*100000)%7 + 6;
    document.getElementById("keyarea_gen").value = Vernam_RandSequence(key_len);
    Next_Encryption();
}

function next_binary_num(binary_num) {
    var index = 0;
    var len = binary_num.length;
    //replace the first "0" with "1"
    if (index < len && binary_num.charAt(index) == "0") {
	binary_num = "1" + binary_num.substring(1);
     return binary_num;
    }
    //toggle all 1's
    while (index < len && binary_num.charAt(index) == "1") {
        var temp_binary_num = "";
        if (index > 0) {
            temp_binary_num += binary_num.substring(0,index);
	}
	temp_binary_num += "0";
	if (index+1 < len) {
	    temp_binary_num += binary_num.substring(index+1,len);
	}
        binary_num = temp_binary_num;
	index ++;
    }
    //toggle next 0
    if (index < len) {
	var temp_binary_num = "";
        temp_binary_num += binary_num.substring(0,index) + "1";
	if (index+1 < len) {
	    temp_binary_num += binary_num.substring(index+1);
	}
        binary_num = temp_binary_num;
    }
    return binary_num;
}

function generate_all_pairs() {
    var key = document.getElementById("user_key").value;
    if (key.length == 0) {
	alert("Please enter a binary key!");
        return;
    }
    key = resize_key(key);
    var all_tuples = "";
    var binary_num = "00000000";
    var possible_plain_text= Math.pow(2,PLAIN_TEXT_LEN);
    possible_plain_text= Math.pow(2,PLAIN_TEXT_LEN);
    var i = 0;
    for (i=0;i<possible_plain_text;i++) {
	binary_num = next_binary_num(binary_num);
	crypted_text = encrypt(binary_num, key);
        all_tuples += binary_num + " , " + crypted_text + "\n" ;
    }
    document.getElementById("textarea2").value = all_tuples;
}

function checkAnswer() {
    if (document.getElementById("yesno").value == 'yes')
    {
        document.getElementById("notification").value = "This is not correct, Please try again!";
	return;
    }
    var m1 = document.getElementById("m1").value;
    var m2 = document.getElementById("m2").value;
    if (m1.length == 0 || m2.length == 0) {
	alert("Please enter values for m1 and m2");
	return;
    }
    var key = document.getElementById("user_key").value;
    key = resize_key(key);
    var c1 = encrypt(m1, key);
    var c2 = encrypt(m2, key);
    if(c1 == c2) {
	document.getElementById("notification").value = "CORRECT!!";
    } else {
        document.getElementById("notification").value = "This is not correct, Please try again!";
    }
}
