function trim(str) {
    return str.replace(/\s+/g,"");
}

var current_l=8;

function xor_strings(a, b) {
        if(a.length != b.length) {
                alert("Error calculating XOR");
                return;
        }
        var output = "";
        for (var i=0; i<a.length; i ++) {
                if(a[i] == b[i]) {
                        output += "0";
                } else {
                        output += "1";
                }
        }
        return output;
}

function validate_binary(input) {
    var len = input.length;
    var i;
    for(i=0;i<len;i++) {
	if(input.charAt(i) != "0" && input.charAt(i) != "1") {
	    break;
	}
    }
    if (i<len) {
	return 0;
    }
    return 1;
}

function get_num_in_binary(num) {
	var num_in_binary = "";
	while (num > 0) {
		num_in_binary = num%2 + num_in_binary;
		num = Math.floor(num/2);
	}
	return num_in_binary;
}

function isUnsignedInteger(s) {
  return (s.toString().search(/^[0-9]+$/) == 0);
}

function rand_sequence(len){
    ret="";
    for(i=0; i<len; i++) {
        ret += (Math.ceil(Math.random()*1000000))%2;
    }
    return ret;
}

function next_plain_text() {
    var len = Math.random()*100%100+(2*current_l);
    document.getElementById("plaintext").value = rand_sequence(len);
}

function next_IV() {
    var l = document.getElementById("l").value;
    if (! isUnsignedInteger(l) ) {
	alert("l should be a positive integer");
	return;
    }
    if ( l < 8 ) {
	alert("Please select l >= 8");
	return;
    }
    current_l = l; 
    document.getElementById("iv").value = rand_sequence(current_l);
}

function next_Key() {
    var l = document.getElementById("l").value;
    if (! isUnsignedInteger(l) ) {
	alert("l should be a positive integer");
	return;
    }
    if ( l < 8 ) {
	alert("Please select l >= 8");
	return;
    }
    current_l = l; 
    document.getElementById("key").value = rand_sequence(current_l);
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

function hash_function(input) {
    var l = input.length;
    var output = "";
    for(var i=0;i<l/2;i++) {
	output += XOR(input.charAt(2*i), input.charAt(2*i+1));
    }
	return output;
}

function get_hash() {
    var input = document.getElementById("usertext").value;
    if(validate_binary(input) == 0) {
	document.getElementById("usertext").value = "Please give a binary string of size " + 2*current_l;
	return;
    }
    var l = input.length;
    if(l != 2*current_l) {
	document.getElementById("usertext").value = "Please give a binary string of size 2l";
	return;
    }
    document.getElementById("hashvalue").value = hash_function(input);
}

function pad_input(input) {
	var numZeroes = (Math.ceil((input.length)/current_l))*current_l - input.length;
    for( var i=0; i<numZeroes; i++ ) {
		input += '0';
	}
	return input;
}

function pad_input_before(input) {
	var numZeroes = (Math.ceil((input.length)/current_l))*current_l - input.length;
    for( var i=0; i<numZeroes; i++ ) {
		input = '0' + input;
	}
	return input;
}

function pad_iopad(pad) {
	var output = pad;
	var numExtras = (Math.ceil((pad.length)/current_l))*current_l - pad.length;
	var index = 0;
    for( var i=0; i<numExtras; i++ ) {
		output += pad.charAt(index);
		index ++;
		if (index == pad.length) {
			index = 0;
		}
	}
	return output;	
}

function appendLength() {
    var plaintext = pad_input(document.getElementById("plaintext").value);
	document.getElementById('pt').value = pad_input_before(get_num_in_binary(plaintext.length));
}

function pad_plain_text() {
	document.getElementById("plaintext").value = pad_input(document.getElementById("plaintext").value);
}

function checkAnswer() {
	var user_answer = document.getElementById("cipherarea").value;
	if(user_answer.length == 0) {
		alert("Please enter an answer");
		return;
	}
	
    var key = document.getElementById("key").value;
	var kxoripad = xor_strings(key, pad_iopad("01011100"));
    var plaintext = pad_input(document.getElementById("plaintext").value);
	plaintext += pad_input_before(get_num_in_binary(plaintext.length));
    var iv = document.getElementById("iv").value;
    var t = hash_function(iv + kxoripad);
	var numChunks = (plaintext.length)/current_l;
    for( var i=0; i<numChunks; i++ ) {
		var startIndex = i*current_l;
		var gethashfor = t + plaintext.substring(startIndex, startIndex+current_l);
		t = hash_function(gethashfor);
	}

	var kxoropad = xor_strings(key, pad_iopad("00110110"));
	var t2 = hash_function(iv + kxoropad);
	t = hash_function(t2 + t);
	
	if(trim(user_answer) == trim(t)) {
		document.getElementById('notification').innerHTML = "CORRECT!!";
	} else {
		document.getElementById('notification').innerHTML = "Something is not correct, please try again!";
	}
}
