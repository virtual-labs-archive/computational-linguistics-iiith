
function trim(str) {
    return str.replace(/\s+/g,"");
}

var current_l=4;
var current_function="1100";
//var l = 3;

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

function xor_strings(a, b) {
	if(a.length != b.length) {
		alert("Error calculating XOR");
		return;
	}
	var output = "";
	for (var i=0; i<a.length; i++) {
		if(a[i] == b[i]) {
			output += "0";
		} else {
			output += "1";
		}
	}
	return output;
}

function next_plain_text() {
    var len = Math.random()*100%100;
    document.getElementById("plaintext").value = rand_sequence(len);
}

function next_key() {
    var len = Math.random()*100%100;
    document.getElementById("key").value = rand_sequence(len);
}

function next_IV() {
    var l = document.getElementById("l").value;
    if (! isUnsignedInteger(l) ) {
	alert("l should be a positive integer");
	return;
    }
    var text_size = document.getElementById("plaintext").value.length;
    if (text_size > 2*l) {
    	current_l = l;
	current_function = next_function(l);
    } else {
	alert("l should not be greater than the (length of plaintext)/2");
        document.getElementById("l").value = current_l;
	return;
    }
    document.getElementById("iv").value = rand_sequence(current_l);
}

function shrink_key(key, l) {
    var new_key = "";
    for(i=0;i<l;i++) {
        new_key += key.charAt(i);
    }
//document.getElementById("usertext").value = "old key is "+ key+" new key is "+new_key+" l value "+l+" i value "+i;
    return new_key;
}

function expand_key(key, l) {
    var index = 0;
    while (key.length < l) {
        key += key.charAt(index);
        index ++;
    }
    return key;
}

function resize_key(key, l) {
    var key_len = key.length;
    if (key_len > l) {
        key = shrink_key(key,l);
    }
    else if (key_len < l) {
        key = expand_key(key,l);
    }
    return key;
}

function next_function() {
    current_function = rand_sequence(current_l);
}

function function_value(input, key) {
    var l = input.length;

    key = resize_key(key, l);

    var output = "";
    for( var i=0;i<l;i++) {
        if(current_function.charAt(i) == "0") {
            output += XOR(input.charAt(i), key.charAt(i));
        }
        else {
            output += EQV(input.charAt(i), key.charAt(i));
        }
    }

	return output;
}

function apply_function() {
    var input = document.getElementById("usertext").value;
     
   var l = input.length;	
    if(validate_binary(input) == 0 || l != current_l) {
		document.getElementById("usertext").value = "Please give a binary string of size " + current_l;
		return;
    }
  var key = document.getElementById("key").value;
    //apply the function on the plaintext and the key now.
//document.getElementById("usertext").value =  "l value "+l+"input is "+input + "key is "+key;
    document.getElementById("functionvalue").value = function_value(input, key);
}

function pad_input(input) {
    var numZeroes = (Math.ceil((input.length)/current_l))*current_l - input.length;
    for( var i=0; i<numZeroes; i++ ) {
                input += '0';
    }
    return input;
}

function CheckAnswer() {
	var user_answer = document.getElementById("outputarea").value;
	if(user_answer.length == 0) {
		alert("Please enter an answer!");
		return;
	}
    var plaintext = pad_input(document.getElementById("plaintext").value);
    var iv = document.getElementById("iv").value;
    var key = document.getElementById("key").value;
    var numChunks = (plaintext.length)/current_l;
    for( var i=0; i<numChunks; i++ ) {
        var startIndex = i*current_l;
        var gethashfor = xor_strings(iv, plaintext.substring(startIndex, startIndex+current_l));
        iv = function_value(gethashfor, key);
    }   
    if(trim(user_answer) == trim(iv)) {
        document.getElementById('notification').innerHTML = "CORRECT!!";
    } else {
        document.getElementById('notification').innerHTML = "Incorrect answer, please try again!";
    }   
}
