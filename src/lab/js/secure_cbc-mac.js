	
var current_l=4;
var current_function="1100";

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

function next_plain_text() {
    var len = Math.random()*100%100;
    document.getElementById("plaintext").value = rand_sequence(len);
}

function next_key() {
    var len = Math.random()*100%100;
    document.getElementById("key").value = rand_sequence(len);
}

function next_key2() {
    var len = Math.random()*100%100;
    document.getElementById("key2").value = rand_sequence(len);
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
        key = shrink_key(key);
    }
    else if (key_len < l) {
        key = expand_key(key);
    }
    return key;
}

function next_function() {
    current_function = rand_sequence(current_l);
}

function apply_function() {
    var input = document.getElementById("usertext").value;
    var l = input.length;
    if(validate_binary(input) == 0 || l != current_l) {
	document.getElementById("usertext").value = "Please give a binary string of size " + current_l;
	return;
    }
    var key = document.getElementById("key").value;
    key = resize_key(key, l);
    //apply the function on the plaintext and the key now.
    var output = "";
    var i = 0;
    for(i=0;i<l;i++) {
        if(current_function.charAt(i) == "0") {
            output += XOR(input.charAt(i), key.charAt(i));
        }
        else {
            output += EQV(input.charAt(i), key.charAt(i));
        }
    }
    document.getElementById("functionvalue").value = output;
}

function reset() {
	document.getElementById("user_message").style.display = "none";
	document.getElementById("userKey").style.display = "none";
	document.getElementById("key_generated2").style.display = "none";
}

function select(){
    var selectmenu = document.getElementById("secureOptions");
    var chosen_option=selectmenu.options[selectmenu.selectedIndex];
    reset();
    if (chosen_option.value == "key") {
	document.getElementById("userKey").style.display = "block";
    } else if (chosen_option.value == "length") {
	document.getElementById("user_message").style.display = "block";
    } else {
	document.getElementById("key_generated2").style.display = "block";
    }
}
