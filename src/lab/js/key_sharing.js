var primes = ["7237", "10141", "11069", "12553", "13597"];
var generators = [[2, 5, 7, 11, 15, 18, 21, 23, 24, 26],
		  [2, 6, 7, 10, 11, 21, 24, 26, 33, 34, 53, 54],
		  [2, 3, 8, 10, 12, 13, 14, 15, 18, 21, 22, 27, 32, 33, 34, 37, 38, 40, 43, 46],
		  [5, 10, 11, 19, 26, 30, 31, 33, 34, 35, 39, 40, 41, 44, 45, 51, 52, 53, 57],
		  [5, 6, 7, 18, 19, 20, 21, 24, 28, 37, 41, 45, 50, 51, 55, 57, 58]];

var currentPrimeIndex = -1;
var currentGeneratorIndex = 1;

var currentPrime;
var currentGenerator;

function powAndMod(G, a, p) {
	var t = G;
	for ( var i=0; i<a; i ++ ) {
		t = (t*G)%p;
	}
	return t;
} 

function nextPrime() {
	currentPrimeIndex ++;
	currentPrime = primes[currentPrimeIndex];
	document.getElementById("prime").value = currentPrime;
	currentGeneratorIndex = generators[currentPrimeIndex].length;
}

function nextGenerator() {
	currentGeneratorIndex --;
	currentGenerator = generators[currentPrimeIndex][currentGeneratorIndex];
	document.getElementById("generator").value = currentGenerator;
}

function nextKeyA() {
	document.getElementById("keyA").value = Math.ceil((Math.random()*1000000))%primes[currentPrimeIndex];
}

function calculateGA() {
	var a = document.getElementById("keyA").value;
	document.getElementById("encryptA").value = powAndMod(currentGenerator, a, currentPrime);
}

function sendA() {
	document.getElementById("receivedB").value = document.getElementById("encryptA").value;
}

function calculateGAB() {
	var Gb = document.getElementById("receivedA").value;
	var a = document.getElementById("keyA").value;
	document.getElementById("encryptAB").value = powAndMod(Gb, a, currentPrime);
}

function nextKeyB() {
	document.getElementById("keyB").value = Math.ceil((Math.random()*1000000))%primes[currentPrimeIndex];
}

function calculateGB() {
	var b = document.getElementById("keyB").value;
	document.getElementById("encryptB").value = powAndMod(currentGenerator, b, currentPrime);
}

function sendB() {
	document.getElementById("receivedA").value = document.getElementById("encryptB").value;
}

function calculateGBA() {
	var Ga = document.getElementById("receivedB").value;
	var b = document.getElementById("keyB").value;
	document.getElementById("encryptBA").value = powAndMod(Ga, b, currentPrime);
}
