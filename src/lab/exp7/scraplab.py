from bs4 import BeautifulSoup
heading=""
breadcrumb=""
def writefile(fname,s,s1,heading):
	f=open(fname, 'w+')
	f.write(template)
	f.seek(0)
	
	content = f.read()
	content=content.replace('Disciplines and Domains',breadcrumb)
	f.seek(0)
	f.write(content)
	print content
	
	f.seek(0)
	content=f.read()
	k=content.index('<div class="col-md-10 lab-list-col-10">')
	
	t1=content.index('<!--edit1-->')
	print t1
	f.seek(t1+13)
	s1=s1+f.read()
	#print s1
	f.seek(t1+13)
	f.write(s1)
	f.seek(0)
	content=f.read()
	t= content.index('<!--edit -->')
	f.seek(t+13)
	s='<h1 class="text-h2-lightblue">'+heading+'</h1>'+s
	s=s+f.read()
	f.seek(t+13)
	f.write(s)
f=open("template1.html",'r')
template=f.read()
f=open("content.html",'r')
srchtml=f.read()
f.close()
soup = BeautifulSoup(srchtml, 'html.parser')
sectionno=soup.find_all('section')
d=['introduction','theory','objective','experiment','manual','quizzes','further_readings','procedure','hh','ll']
print len(sectionno)
sectionNumber=1
st=""

att = ''+'experiment-article-heading'
tagger = soup.findAll('header', attrs={'id':att,'class':'heading'})
heading=str(tagger[0].text)
heading=heading.strip()
print heading
att = ''+'experiment-header-heading'
tagger = soup.findAll('div', attrs={'id':att,'class':'heading'})
heading1=str(tagger[0].text)
print heading
heading1=heading1.strip()
breadcrumb='<a href="http://vlabs.ac.in/computer-science-and-engineering-labs.html" class="sidebar-a" >Computer Science & Engineering</a> &rarr;<a href="../Introduction.html" class="sidebar-a" >'+heading1+'</a>&nbsp&rarr;<a href="../List of experiments.html" class="sidebar-a" >List Of Experiments</a><br/>'
while sectionNumber<=len(sectionno):
	tag=""
	att = ''+'experiment-article-section-'+str(sectionNumber)+'-heading'
	tagger = soup.findAll('div', attrs={'id':att,'class':'heading'})
	if not tagger:
		sectionNumber=sectionNumber+1
		continue
	tag1=str(tagger[0].text)
	tag1=tag1.strip()
	print tag1
	if tag1=='Prerequisite S/W':
		tag1='Prerequisites'
	st+='<a href="'+tag1+'.html?domain=Computer Science&lab='+heading1+'" class="sidebar-a" > <h3 class="text-h3-darkblue" style="margin-top: 2px;">'+tag1+'</h3></a>'	
	sectionNumber=sectionNumber+1
st+='<a href="Feedback.html?domain=Computer Science&lab='+heading1+'" class="sidebar-a" > <h3 class="text-h3-darkblue" style="margin-top: 2px;">Feedback</h3></a>'
sectionNumber=1
while sectionNumber<=len(sectionno):
	tag=""
	tag=""
	att = ''+'experiment-article-section-'+str(sectionNumber)+'-heading'
	tagger = soup.findAll('div', attrs={'id':att,'class':'heading'})
	if not tagger:
		sectionNumber=sectionNumber+1
		continue
	tag1=str(tagger[0].text)	
	tag1=tag1.strip()
	if tag1=='Prerequisite S/W':
		tag1='Prerequisites'
	att = ''+'experiment-article-section-'+str(sectionNumber)+'-content'
	tagger = soup.findAll('div', attrs={'id':att,'class':'content'})
	
	tag+=str(tagger[0])
	#print tag
	#print st
	
	
	writefile(tag1+'.html',tag,st,heading)
	#print sectionNumber
	sectionNumber=sectionNumber+1
	
f=open("Feedback.html",'w+')
f.write(template)
f.seek(0)
	
content = f.read()
content=content.replace('Disciplines and Domains',breadcrumb)
f.seek(0)
f.write(content)
#print content
f.seek(0)
content=f.read()
k=content.index('<div class="col-md-10 lab-list-col-10">')
	
t1=content.index('<!--edit1-->')
print t1
f.seek(t1+13)
st=st+f.read()
#print s1
f.seek(t1+13)
f.write(st)
f.seek(0)
content=f.read()
t= content.index('<!--edit -->')
f.seek(t+13)
s='<h1 class="text-h2-lightblue">'+heading+'</h1>'+'<a href="http://feedback.vlabs.ac.in/">Feedback</a>'
s=s+f.read()
f.seek(t+13)
f.write(s)
