# Node

Allows millions of ppl at once.

Can build desktop apps too (on electron)
And, it can setup hardware- IOT
End-to-end apps, all in JS.

What does it mean to start a web app?

Web Apps need code to run.
They also need DATA to load when the code runs

Data comes from the server.

Server receives messages from the client laptop, and determines what data to return.

What languages can we write to talk w the server?

- PHP
- Ruby
- Node
- Python

Server's capabilities:

- Network socket
- File system
- CPU for cryptography and passwords
- Kernal for I/O management


Servers use CODE to know what to send back.

NODE works with C++ to access data on a server.

So, Javascript -> Node -> C++ to interact with the OS.

Run JS by putting () at the end.

The node feature that accesses the networking data is HTTP

NODE knows when an incoming request comes in;

Bundle it up in a function, and NODE will know

Any request that takes a long time will be passed to Node.

If you want to run a function, add parameters to the function.

Whereever you run node is where the dot "." folder will start off looking

# FS

Networking is what we have been using so far.
FS is a NEW FEATURE (for us) of the internal workings in node.

The file system is accessible VIA FS, which is a bunch of C++ that allows Node to interact with the internals of a computer.

use JS label (fs) to access NODE to access the files.
NODE knows where to look for the file.

`fs.readFile('/tweets.json', autoRunFunction);`

The computer sets up a THREAD that runs and IO in Node
Which IO in NODE sets up a thread? for NETWORK access
FS access? Sets up a thread for cimmputer internals

