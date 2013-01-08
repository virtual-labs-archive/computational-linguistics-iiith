===========================================================

Congratulations!

You have successfully checked out a copy of the latest
stable release of Virtual Lab Developer Kit. The current
stable release is 1.5 . The kit contains all that is
necessary to indicate the structure, that your lab should
follow.


Kindly make a note of a few changes. New Tabs have been
added for: 
  1) Target Audience
  2) Courses Aligned
  3) Pre-requisite Softwares 

In order to be consistent with all other labs, you therefore
need to add the above mentioned 3 more sections to the home
page of your virtual lab. Now, thus, you should have the
following sections on the home page of your lab:

  1) Introduction
  2) List Of Experiments
  3) Target Audience
  4) Courses Aligned
  5) Pre-requisite Softwares
  6) Feedback


You can make the required changes by editing "content.html"
in the following manner:

> Open "content.html" in your preferred editor and search
  for last closing html tag </section>.
> Open the "change.html" file in your choice of editor.
> Select all the content of file "change.html". 
> Copy the content and paste it after the last closing html
  tag </section> (you searched for before).


This is how your content.html will look like once done with
the changes:

/*********************************************************/

<!-- Second section of the article-->
<section id="lab-article-section-2">

<div id="lab-article-section-2-icon" class="icon">
  <!-- Enclose the icon image for the section. -->
  <img src="images/simulation.jpg" />
</div>


<!-- The heading for the section can be enclosed in a 
div tag and shown with a <h2> tag -->
<div id="lab-article-section-2-heading" class="heading">
  List of experiments
</div>
			
<!-- Write the section content inside a paragraph 
element, You can also include images with <img> tag -->
<div id="lab-article-section-2-content" class="content">
  <ul id="list-of-experiments">
  
    <li> 
      <!--Link and name of the experiment 1 -->
      <a href="exp1/index.html">Simple Pendulum Experiment</a> 
    </li>
  </ul>
</div>

</section>

// All the content from "change.html" will follow here.


/*********************************************************/

Now you need to create a fresh build directory for your
virtual lab. To do this,

> Run makefile by the following commands at the same level
  as that of makefile as indicated below: 

/*********************************************************/

  $ make clean           //cleans the build directory 
  $ make all             //creates a fresh build directory

/*********************************************************/

Once, you do a make, you get a fresh copy of the build
directory. Now in order to change the theme of your virtual
lab,

> Go to src folder and run "make theme=blue-icon" on your
  command line in the terminal, to change your lab theme to
  blue-icon as follows:

/*********************************************************/

  $ make theme=blue-icon //changes the theme to blue-icon

/*********************************************************/

Now, in order to test the template, and view your virtual
lab, open the file "build/index.html" in the browser.

With this, you have succesfully checked the template. You
can now keep on adding more experiments to develop your
virtual lab.

For any further doubts, send mail to support@virtual-labs.ac.in.

===========================================================
