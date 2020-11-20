# Callstack

This is JavaScript way of tracking what line of code is currenlty running.

# Node Streams

A stream is a series of CHUNKS of data.
Each CHUNK is 64k bits.

Set a function, and for each CHUNK, when it is complete, run this function.

Video- we use SPECIALIZED things, not NODE.
We dont even use HTTP, we use UDP

Trigger background features, setup auto run function, have it autorun when BG feature finishes, auto-insert data from NODE.


So, there is an EVENT triggered every 64k bits.

Fs read stream reads DATA automatically, for every 64k bits that are loaded in the stream.

How to set up RULES where NODE wont run functions in the CALL STACK without having a STACK OVERFLOW

Node, and the LIBUV library help with this.

The CALLBACK QUEUE is where `doOnNewBatch` waits until the previous function is completed.

# Checking callback Queue

Node keeps checking to see if there is any code that is sitting on the callstack: written by us, or globally.

Once our code is finished, LIBUV (and the browser version of JS) have **the event loop**.

So, NODE can start working on things and process them before the whole set of data is completely received.

This is Node's EVENT system.

We can break down any chunk of data. JAVASCRIPT will continue to process what has been completed.

SO

NODE is running one thread; JS is running the next thread.

Anything with IO is on the same thread.

#ASYNCHRONICITY
