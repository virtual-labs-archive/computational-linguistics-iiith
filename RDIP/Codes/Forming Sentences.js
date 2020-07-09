var text = '{"sentence1":[' +
'{"firstWord":"John","secondWord":"ate","thirdWord":"an","fourthWord":"apple","fifthWord":"before","sixthWord":"afternoon"},' +
'{"firstWord":"before","secondWord":"afternoon","thirdWord":"John","fourthWord":"ate","fifthWord":"an","sixthWord":"apple"},' +
'{"firstWord":"John","secondWord":"before","thirdWord":"afternoon","fourthWord":"ate","fifthWord":"an","sixthWord":"apple" }]}  {"sentence2":[' +

'{"firstWord":"some","secondWord":"students","thirdWord":"like","fourthWord":"to","fifthWord":"study":"sixthWord":"in","seventhWord":"the","eightWord":"night"},'
	 + 
'{"firstWord":"at","secondWord":"night","thirdWord":"some","fourthWord":"students","fifthWord":"like","sixthWord":"to","seventhWord":"study"}]}  {"sentence3":[' + 

'{"firstWord":"John","secondWord":"and","thirdWord":"Mary","fourthWord":"went","fifthWord":"to","sixthWord":"church"},' 
     +
 '{"firstWord":"Mary","secondWord":"and","thirdWord":"John","fourthWord":"went","fifthWord":"to","sixthWord":"church"}]}  {"sentence4":[' +

  '{"firstWord":"John","secondWord":"went","thirdWord":"to","fourthWord":"church","fifthWord":"after","sixthWord":"eating"},'
  	 +
  '{"firstWord":"after","secondWord":"eating","thirdWord":"John","fourthWord":"went","fifthWord":"to","sixthWord":"church"},'
  	 +
  '{"firstWord":"John","secondWord":"after","thirdWord":"eating","fourthWord":"went","fifthWord":"to","sixthWord":"church"}]}    {"sentence5":[' +

   '{"firstWord":"did","secondWord":"he","thirdWord":"go","fourthWord":"to","fifthWord":"market"},'
     +
   '{"firstWord":"he","secondWord":"did","thirdWord":"go","fourthWord":"to","fifthWord":"market"}]}  {"sentence6":[' +

     '{"firstWord":"the","secondWord":"woman","thirdWord":"who","fourthWord":"called","fifthWord":"my","sixthWord":"sister","seventhWord":"sells","eightWord":"cosmetics"},'
     +
     '{"firstWord":"the","secondWord":"woman","thirdWord":"who","fourthWord":"sells","fifthWord":"cosmetics","sixthWord":"called","seventhWord":"my","eightWord":"sister"},'
     +
     '{"firstWord":"my","secondWord":"sister","thirdWord":"who","fourthWord":"sells","fifthWord":"cosmetics","sixthWord":"called","seventhWord":"the","eightWord":"woman"},'
     +
     '{"firstWord":"my","secondWord":"sister","thirdWord":"who","fourthWord":"called","fifthWord":"the","sixthWord":"woman","seventhWord":"sells","eightWord":"cosmetics"}]}  {"sentence7":[' +

      '{"firstWord":"John","secondWord":"goes","thirdWord":"to","fourthWord":"the","fifthWord":"library","sixthWord":"and","seventhWord":"studies"},'
     +
     '{"firstWord":"John","secondWord":"studies","thirdWord":"and","fourthWord":"goes","fifthWord":"to","sixthWord":"the","seventhWord":"library"}]}   {"sentence8":[' + 

      '{"firstWord":"John","secondWord":"ate","thirdWord":"an","fourthWord":"apple","fifthWord":"so","sixthWord":"did","seventhWord":"she"},'
      +
       '{"firstWord":"she","secondWord":"ate","thirdWord":"an","fourthWord":"apple","fifthWord":"so","sixthWord":"did","seventhWord":"John"}]}  {"sentence9":[' +

       '{"firstWord":"the","secondWord":"teacher","thirdWord":"returned","fourthWord":"the","fifthWord":"book","sixthWord":"after","seventhWord":"she","eightWord":"noticed","ninthWord":"the","tenthWord":"error"},'
       +
       '{"firstWord":"the","secondWord":"teacher","thirdWord":"noticed","fourthWord":"the","fifthWord":"error","sixthWord":"after","seventhWord":"she","eightWord":"returned","ninthWord":"the","tenthWord":"book"},'
       +
       '{"firstWord":"after","secondWord":"the","thirdWord":"teacher","fourthWord":"returned","fifthWord":"the","sixthWord":"book","seventhWord":"she","eightWord":"noticed","ninthWord":"the","tenthWord":"error"},'
       +
       '{"firstWord":"after","secondWord":"the","thirdWord":"teacher","fourthWord":"noticed","fifthWord":"the","sixthWord":"error","seventhWord":"she","eightWord":"returned","ninthWord":"the","tenthWord":"book"},'
       +
       '{"firstWord":"she","secondWord":"returned","thirdWord":"the","fourthWord":"book","fifthWord":"after","sixthWord":"the","seventhWord":"teacher","eightWord":"noticed","ninthWord":"the","tenthWord":"error"},'
       +
       '{"firstWord":"she","secondWord":"noticed","thirdWord":"the","fourthWord":"error","fifthWord":"after","sixthWord":"the","seventhWord":"teacher","eightWord":"returned","ninthWord":"the","tenthWord":"book"},'
       +
        '{"firstWord":"after","secondWord":"she","thirdWord":"returned","fourthWord":"the","fifthWord":"book","sixthWord":"the","seventhWord":"teacher","eightWord":"noticed","ninthWord":"the","tenthWord":"error"},'
        +
         '{"firstWord":"after","secondWord":"she","thirdWord":"noticed","fourthWord":"the","fifthWord":"error","sixthWord":"the","seventhWord":"teacher","eightWord":"returned","ninthWord":"the","tenthWord":"book"}]}  {"sentence10":[' +

         '{"firstWord":"I","secondWord":"told","thirdWord":"her","fourthWord":"that","fifthWord":"I","sixthWord":"bought","seventhWord":"a","eightWord":"book","ninthWord":"yesterday"},'
         +
         '{"firstWord":"I","secondWord":"told","thirdWord":"her","fourthWord":"yesterday","fifthWord":"that","sixthWord":"I","seventhWord":"bought","eightWord":"a","ninthWord":"book"},'
         +
         '{"firstWord":"yesterday","secondWord":"I","thirdWord":"told","fourthWord":"her","fifthWord":"that","sixthWord":"I","seventhWord":"bought","eightWord":"a","ninthWord":"book"},' 
         +
         '{"firstWord":"I","secondWord":"bought","thirdWord":"a","fourthWord":"book","fifthWord":"that","sixthWord":"I","seventhWord":"told","eightWord":"her","ninthWord":"yesterday"},'
         +
         '{"firstWord":"I","secondWord":"bought","thirdWord":"a","fourthWord":"book","fifthWord":"yesterday","sixthWord":"that","seventhWord":"I","eightWord":"told","ninthWord":"her"},' 
         +
         '{"firstWord":"yesterday","secondWord":"I","thirdWord":"bought","fourthWord":"a","fifthWord":"book","sixthWord":"that","seventhWord":"I","eightWord":"told","ninthWord":"her"}]}  {"sentence11":[' +

         '{"firstWord":"राम","secondWord":"और","thirdWord":"श्याम","fourthWord":"बाजार","fifthWord":"गयें"},'
         +
          '{"firstWord":"राम","secondWord":"और","thirdWord":"श्याम","fourthWord":"गयें","fifthWord":"बाजार"},' 
          +
         '{"firstWord":"बाजार","secondWord":"गयें","thirdWord":"राम","fourthWord":"और","fifthWord":"श्याम"},'
         +
 '{"firstWord":"गयें","secondWord":"बाजार","thirdWord":"राम","fourthWord":"और","fifthWord":"श्याम"}]} {"sentence12":[' +


 '{"firstWord":"राम","secondWord":"सोया","thirdWord":"और","fourthWord":"श्याम","fifthWord":"भी"},'
 +
 '{"firstWord":"श्याम","secondWord":"सोया","thirdWord":"और","fourthWord":"राम","fifthWord":"भी"},'
 +
 '{"firstWord":"सोया","secondWord":"श्याम","thirdWord":"और","fourthWord":"राम","fifthWord":"भी"},' 
 +
 '{"firstWord":"सोया","secondWord":"राम","thirdWord":"और","fourthWord":"श्याम","fifthWord":"भी"}]}  {"sentence13":[' +

 '{"firstWord":"मैंने","secondWord":"उसे","thirdWord":"बताया","fourthWord":"कि","fifthWord":"राम","sixthWord":"सो","seventhWord":"रहा","eightWord":"है"},'
 +
  '{"firstWord":"मैंने","secondWord":"उसे","thirdWord":"बताया","fourthWord":"कि","fifthWord":"सो","sixthWord":"रहा","seventhWord":"है","eightWord":"राम"},'   
  +
  '{"firstWord":"उसे","secondWord":"मैंने","thirdWord":"बताया","fourthWord":"कि","fifthWord":"राम","sixthWord":"सो","seventhWord":"रहा","eightWord":"है"},'
  +
  '{"firstWord":"उसे","secondWord":"मैंने","thirdWord":"बताया","fourthWord":"कि","fifthWord":"सो","sixthWord":"रहा","seventhWord":"है","eightWord":"राम"},'
  +
  '{"firstWord":"मैंने","secondWord":"बताया","thirdWord":"उसे","fourthWord":"कि","fifthWord":"राम","sixthWord":"सो","seventhWord":"रहा","eightWord":"है"},'
  +
  '{"firstWord":"मैंने","secondWord":"बताया","thirdWord":"उसे","fourthWord":"कि","fifthWord":"सो","sixthWord":"रहा","seventhWord":"है","eightWord":"राम"},'
  +
  '{"firstWord":"उसे","secondWord":"बताया","thirdWord":"मैंने","fourthWord":"कि","fifthWord":"राम","sixthWord":"सो","seventhWord":"रहा","eightWord":"है"},'
  +
  '{"firstWord":"उसे","secondWord":"बताया","thirdWord":"मैंने","fourthWord":"कि","fifthWord":"सो","sixthWord":"रहा","seventhWord":"है","eightWord":"राम"},'
  +
  '{"firstWord":"बताया","secondWord":"मैंने","thirdWord":"उसे","fourthWord":"कि","fifthWord":" राम","sixthWord":"सो","seventhWord":"रहा","eightWord":"है"},' 
  +
   '{"firstWord":"बताया","secondWord":"मैंने","thirdWord":"उसे","fourthWord":"कि","fifthWord":" सो","sixthWord":"रहा","seventhWord":"है","eightWord":"राम"},'
   +
   '{"firstWord":"बताया","secondWord":"उसे","thirdWord":"मैंने","fourthWord":"कि","fifthWord":"राम","sixthWord":"सो","seventhWord":"रहा","eightWord":"है"},' 
   +
   '{"firstWord":"बताया","secondWord":"उसे","thirdWord":"मैंने","fourthWord":"कि","fifthWord":"सो","sixthWord":"रहा","seventhWord":"है","eightWord":"राम"}]}  {"sentence14":[' +

    '{"firstWord":"राम","secondWord":"खाकर","thirdWord":"सोया"},'
    +
    '{"firstWord":"खाकर","secondWord":"राम","thirdWord":"सोया"},' 
    +
    '{"firstWord":"राम","secondWord":"सोया","thirdWord":"खाकर"},'
    +
    '{"firstWord":"खाकर","secondWord":"सोया","thirdWord":"राम"},'
    +
    '{"firstWord":"सोया","secondWord":"राम","thirdWord":"खाकर"},'
    +
    '{"firstWord":"सोया","secondWord":"खाकर","thirdWord":"राम"}]}   {"sentence15":[' +

    '{"firstWord":"बिल्लियों","secondWord":"को","thirdWord":"मारकर","fourthWord":"कुत्ता","fifthWord":"सो","sixthWord":"गया"},'
    +
    '{"firstWord":"मारकर","secondWord":"बिल्लियों","thirdWord":"को","fourthWord":"कुत्ता","fifthWord":"सो","sixthWord":"गया"},'
    +
    '{"firstWord":"बिल्लियों","secondWord":"को","thirdWord":"मारकर","fourthWord":"सो","fifthWord":"गया","sixthWord":"कुत्ता"},'
    +
    '{"firstWord":"मारकर","secondWord":"बिल्लियों","thirdWord":"को","fourthWord":"सो","fifthWord":"गया","sixthWord":"कुत्ता"},'
    +
    '{"firstWord":"कुत्ता","secondWord":"सो","thirdWord":"गया","fourthWord":"बिल्लियों","fifthWord":"को","sixthWord":"मारकर"},'
    +
    '{"firstWord":"कुत्ता","secondWord":"सो","thirdWord":"गया","fourthWord":"मारकर","fifthWord":"बिल्लियों","sixthWord":"को"},'
    +
    '{"firstWord":"सो","secondWord":"गया","thirdWord":"कुत्ता","fourthWord":"बिल्लियों","fifthWord":"को","sixthWord":"मारकर"},'
    +
'{"firstWord":"सो","secondWord":"गया","thirdWord":"कुत्ता","fourthWord":"मारकर","fifthWord":"बिल्लियों","sixthWord":"को"}]}  {"sentence16":[' + 

  '{"firstWord":"एक","secondWord":"लाल","thirdWord":"किताब","fourthWord":"वहाँ","fifthWord":"है"},'
  + 
  '{"firstWord":"एक","secondWord":"लाल","thirdWord":"किताब","fourthWord":"है","fifthWord":"वहाँ"},'
  +
   '{"firstWord":"वहाँ","secondWord":"है","thirdWord":"एक","fourthWord":"लाल","fifthWord":"किताब"},' 
   +
   '{"firstWord":"वहाँ","secondWord":"है","thirdWord":"एक","fourthWord":"लाल","fifthWord":"किताब"},'
   +
   '{"firstWord":"है","secondWord":"वहाँ","thirdWord":"एक","fourthWord":"लाल","fifthWord":"किताब"}]}  {"sentence17":[' +

    '{"firstWord":"एक","secondWord":"बड़ी","thirdWord":"सी","fourthWord":"किताब","fifthWord":"वहाँ","sixthWord":"है"},'     
     +
     '{"firstWord":"एक","secondWord":"बड़ी","thirdWord":"सी","fourthWord":"किताब","fifthWord":"है","sixthWord":"वहाँ"},' 
     +
   '{"firstWord":"बड़ी","secondWord":"सी","thirdWord":"एक","fourthWord":"किताब","fifthWord":"वहाँ","sixthWord":"है"},'
   +
   '{"firstWord":"बड़ी","secondWord":"सी","thirdWord":"एक","fourthWord":"किताब","fifthWord":"है","sixthWord":"वहाँ"},' 
   +
    '{"firstWord":"वहाँ","secondWord":"है","thirdWord":"एक","fourthWord":"बड़ी","fifthWord":"सी","sixthWord":"किताब"},'
    +
   '{"firstWord":"वहाँ","secondWord":"है","thirdWord":"बड़ी","fourthWord":"सी","fifthWord":"एक","sixthWord":"किताब"},'
   +
    '{"firstWord":"है","secondWord":"वहाँ","thirdWord":"एक","fourthWord":"बड़ी","fifthWord":"सी","sixthWord":"किताब"},' 
    +
    '{"firstWord":"है","secondWord":"वहाँ","thirdWord":"बड़ी","fourthWord":"सी","fifthWord":"एक","sixthWord":"किताब"}]}';
obj = JSON.parse(text);