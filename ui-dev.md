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

HTML code loaded in parser:

1. Input node
2. Div
3. script. This starts the JS engine. This determines when JS starts getting run. It has global memory. This stores things in memory.

Now, we have a DOCUMENT object. It has a hidden link.
JS has a hidden link, DOCUMENT; anything that changes here immediately changes what we see; it is a C++ pointer, that is a LINK to the exact place in memory where this LIST (the DOM) is found.

In memory, JS is parsed:

`let jsDiv = document.querySelector('div')`
We store the evaluated output from queryselectory DIVV on the DOCUMENT object into the variable jsDiv.

This DIV is part of C++; querySelector creates an OBJECT; it has a link to the DIV ELEMENT on the DOM.
It is populated by webIDL, and populated by methods for how to interact with this OBJECT in C++ memory.

So, when you query something, it is accessed in the DOM, and what is returned is filled with methods that can be applied to the that object.
You cannot LOG a COMMAND; you can only LOG the evaluated OUTPUT of a command.

## Updating DOM elements with JS.

We have data.
WebIDL is a stanardized way of interacting with features of the browser. It tells exactly how to interact w elements of the DOM.
The REAL js div is an OBJECT with a method with access to the CSS DOM element;

# User Interdation

Every time something needs to change, it must run JS from scratch; there is no permanent memory between running a function to find and element on the DOM, and updating the element on the DOM.

Every time something changes, the JS must run to update the screen.

# 1 way data binding.

- popular paradigm for tackling data/view consistency
- Invalurable at scale
- Enables us to build scalable apps.

So we have a screen.
We have a DOM.
We have JS, and its memory, which is run from HTML linkins to JS.

The MEMORY has a link, through DOCUENT, to access the DOM.
How to make changes as predictable as possible?

# Changing view based on interaction

When user clicks on input:
the event is added to the callback queue; if there is nothing left on the callback queue, the :handleclick" function is run;

# Multiple user interactions.

Now, there are multiple elements, and multiple elements. It gets harder for the memory to allocate exactly waht is going on, and how to keep the user's view accurate. This cannot scale.
If the JS has to run from scratch with every change, with every line of JS, it gets difficult: reasoning out what the user did, and only allow the USER to effect STATE.

Everything the USER sees is a relation of SAVE DATA/What the user sees.

How can this get limited?

Restrict every view to be of
1. An update of DATA and
2. A run of a single `dataToView` converter function

This way, all the data is in one place. Everything the user sees is DATA; the data is changed based on what the user does.

Everything the user SEES needs to be captured in data. Anything changeable has to have data.

It is intenable to keep track of all of the code, and have it be conditional based on whether the user has changed anything.

# Understanding the `dataToView` function.

What the user sees needs to be the truth.
State is useful. It describes everything that can possibly be changes, and seen by the user.

So we have some code; the code is parsed and saved in memory.
Anything that can change the view runs through `dataToView`.
So if the user can change the view, it is in state, and binds 1-way.

# One way data binding UI elements.

first step: define what the user can see as data.

## Virtual Dom

So the HTML is read by the C++ runtime.
It links to a script, which opens the JS runtime. This JS runtime has memory.

Again, the only thing that can be updated is DATA; this DATA is read/represented byt eh DOM.
One thing PIPES DATA to the VIEW;
The other pipes data to the JS.

There are different runtimes:
The C++ runtime;
it accepts the JS runtime to update the DOM;
This will update the VIEW on the screen.

## Auto updating views

After the call stack is run, it will update the view with any data to view; this is a function that will update what the user sees.
It takes the data, and creates a view BEFORE the user interacts.


DATATOVIEW; this will keep track of everything visible that can be changed.

When "removing" an element with JS, it isnt deleted from the C++ runtime; it is just removed from the view.

Displaying or not displaying is actually the result of data.
In order to keep track of each lement, we need to keep track of every element that is created/removed. It was not there, and then it is there. So, the DATA and the VIEW are being updated.

If a DOM element is removed, DONT set its text content. How can you keep track of it?

We just need to keep track of the STATE of the data; this is the source of truth; this determines what the user sees.

## Understanding UI components.
