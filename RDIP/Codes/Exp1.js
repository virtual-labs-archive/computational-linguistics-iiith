var e1 = ['John ate an apple before afternoon',
                    'before afternoon John ate an apple',
                    'John before afternoon ate an apple'
                ];
var e2 = ['some students like to study in the night',
                    'at night some students like to study'
                ];
var e3 = ['John and Mary went to church',
                    'Mary and John went to church'
                ];
 var e4 = ['John went to church after eating',
                    'after eating John went to church',
                    'John after eating went to church'
                ];
var e5 = ['did he go to market',
                    'he did go to market'
                ];
var e6 = ['the woman who called my sister sells cosmetics',
                    'the woman who sells cosmetics called my sister',
                    'my sister who sells cosmetics called the woman',
                    'my sister who called the woman sells cosmetics'
                ];
var e7 = ['John goes to the library and studies',
                    'John studies and goes to the library'
                ];
 var e8 = ['John ate an apple so did she',
                    'she ate an apple so did John'
                ];
 var e9 = ['the teacher returned the book after she noticed the error',
                    'the teacher noticed the error after she returned the book',
                    'after the teacher returned the book she noticed the error',
                    'after the teacher noticed the error she returned the book',
                    'she returned the book after the teacher noticed the error',
                    'she noticed the error after the teacher returned the book',
                    'after she returned the book the teacher noticed the error',
                    'after she noticed the error the teacher returned the book'
                ];
 var e10 = ['I told her that I bought a book yesterday',
                    'I told her yesterday that I bought a book',
                    'yesterday I told her that I bought a book',
                    'I bought a book that I told her yesterday',
                    'I bought a book yesterday that I told her',
                    'yesterday I bought a book that I told her'
                ];



  var englishArray = [e1,e2,e3,e4,e5,e6,e7,e8,e9,e10];



 var h1 = ['राम और श्याम बाजार गयें',
                    'राम और श्याम गयें बाजार',
                    'बाजार गयें राम और श्याम',
                    'गयें बाजार राम और श्याम'

                ];
 var h2 = ['राम सोया और श्याम भी',
                    'श्याम सोया और राम भी',
                    'सोया श्याम और राम भी',
                    'सोया राम और श्याम भी'
                ];
 var h3 = ['मैंने उसे बताया कि राम सो रहा है',
                    'मैंने उसे बताया कि सो रहा है राम',
                    'उसे मैंने बताया कि राम सो रहा है',
                    'उसे मैंने बताया कि सो रहा है राम',
                    'मैंने बताया उसे कि राम सो रहा है',
                    'मैंने बताया उसे कि सो रहा है राम',
                    'उसे बताया मैंने कि राम सो रहा है',
                    'उसे बताया मैंने कि सो रहा है राम',
                    'बताया मैंने उसे कि राम सो रहा है',
                    'बताया मैंने उसे कि सो रहा है राम',
                    'बताया उसे मैंने कि राम सो रहा है',
                    'बताया उसे मैंने कि सो रहा है राम'
                ];
  var h4 = ['राम खाकर सोया',
                    'खाकर राम सोया',
                    'राम सोया खाकर',
                    'खाकर सोया राम',
                    'सोया राम खाकर',
                    'सोया खाकर राम'
                ];
var h5= ['बिल्लियों को मारकर कुत्ता सो गया	',
                    'मारकर बिल्लियों को कुत्ता सो गया',
                    'बिल्लियों को मारकर सो गया कुत्ता',
                    'मारकर बिल्लियों को सो गया कुत्ता',
                    'कुत्ता सो गया बिल्लियों को मारकर',
                    'कुत्ता सो गया मारकर बिल्लियों को',
                    'सो गया कुत्ता बिल्लियों को मारकर',
                    'सो गया कुत्ता मारकर बिल्लियों को'
                ];
var h6 = ['एक लाल किताब वहाँ है',
                    'एक लाल किताब है वहाँ',
                    'वहाँ है एक लाल किताब',
                    'है वहाँ एक लाल किताब'
                ];
var h7 = ['एक बड़ी सी किताब वहाँ है',
                    'एक बड़ी सी किताब है वहाँ',
                    'बड़ी सी एक किताब वहाँ है',
                    'बड़ी सी एक किताब है वहाँ',
                    'वहाँ है एक बड़ी सी किताब',
                    'वहाँ है बड़ी सी एक किताब',
                    'है वहाँ एक बड़ी सी किताब',
                    'है वहाँ बड़ी सी एक किताब'
                ];



 var hindiArray = [h1,h2,h3,h4,h5,h6,h7];
 let selection = document.getElementById("choose");
function run(){
if (selection.value === "english"){
                document.getElementById("s2").innerHTML = "(select the buttons in proper order)"
                document.getElementById("s1").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words"



}
else if (selection.value === "hindi"){
                document.getElementById("s2").innerHTML = "(select the buttons in proper order)"
                document.getElementById("s1").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words"



}
else {
                document.getElementById("s2").innerHTML = ""
                document.getElementById("s1").innerHTML = ""

                alert("Choose any language")
            }
}

Attachments area
