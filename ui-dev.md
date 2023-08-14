# CSS Object model.

THe CSS parser reads the CSS code, and puts it into C++;
Then, it MIRRORS all the elements of the page from th DOM.

There are 2 goals; Display content, and let users interacts with it.

# Enabling the change of content.

Clicking a button to change something DOESNT MEAN IT CHANGED THE DATA.
THe DISPLAY is just a few pixels; the piexels change. We think what we see is the data.

The truth, the DATA, is what is stored in the data. It is stored somewhere. If it isnt stored, tehere is no way to STORE the current number of "likes" in order to add another "like". The underlying DATA is what changed; the VIEW just represents that.

THe HTML is parsed one time; thats it. It cannot be accessed again.

The DOM is real data; this can be changed by the user.

If you add something to an INPUT, it is added to teh DOM; it is stored int he DOM.
HOWEVER, C++ cannot run in the DOM.
We dont get to write C++ directly.

No one really anticipated the web browser would be the large, powerful environment it would become.

## TERMS
HTML
DOM
WEBCORE

# There is a problem;

THE DOM cant run code.  We must run JS to change the DOM.
JS is the only way to create/save, and change data on the browser.

# Storing data in JS.

JS is the most common language in the worls bc it runs in the browser. The only file the browser can open is HTML.
It takes the HTML, is parsed by HTML parser, then is added to our CSS list of elements.
HTML can also add JS by linking to it, and starting the JS enging. It will have a thread of execution and run line-by-line.

JS can have functions run OUT OF ORDER (Async). User actions are happening. They need DATA from the actions performed; this is called CLOSURE.
So, take the data, and use it in the DOM.

Script.js is added to the DOM.
It has a list of functions that are running. The CALL STACK in JS will be running. GLOBAL will be running, to keep track of where we are.
What is the first thing stored in JS?
The first line of the code.
The CONSOLE isnt in JS; it is in the DEV TOOLS;. As soon as JS is loaded, it loads CONSOLE. It is one of the web browser APIs.

In JS, there is a label for something outside of JS called DOCUMENT. It has a "Hidden link" to other parts of the browser, know it is stored as a hidden property in an object.

DOCUMENT is a hidden object linking to CSS. It is full of functions that check, when its run, in which a list of elements is added to the page.
The JS has a link to the DOM through DOCUMENT.

# Web IDL and Web Core.

It describes interactions between
WebCOre is where the CSS is
WebIDL describes interaction between BORWSER and JS. It tells us how to expect to interact between borwser.
Interact Desriptor Language.
The team building out the web api has a standard they follow, for how to interact with parts of the browser.
The DOM is described in WebIDL.


