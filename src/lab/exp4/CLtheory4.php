<html>
<body>
<h4> Heaps' Law</h4><br/>
The relation between types and tokens can be explained by the <b>Heaps' law</b> (also called Herdan's law) which describes the number of distinct words in a document (types) as a function of the document length(tokens). It can be formulated as: <br/>
<p style="text-align:center"> V = f(n) = Kn<sup>β</sup></p><br/>

where V = types<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;n = tokens<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K and β are free parameters determined empirically<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The values of the parameters depend on the language and with English text corpora, typically K is between 10 and 100, and β is between 0.4 and 0.6.<br/><br/>


Applying logarithmics to both sides of the equation, we get:
<p style="text-align:center"> logV = logK +βlogn</sup></p><br>
which is an equation of a straight line with intercept logK and slope β.

Heap's Law implies that as we gather larger copora (more instances of tokens), the number of distinct types returned gets diminished as we exhaust the discovery of full vocabulary.


</body>
</html>
