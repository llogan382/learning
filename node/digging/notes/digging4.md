# How does NODE connect with Environment?

**POSIX**. This is the way C-style programs integrated with LINUX OS's. Therre are 3 streams: Input, output, and ERROR.

JS does not prescribe anything for I/O.
There are standard outputs in the server- called STREAMS-
If you want to write, you call `.write`

The whole point of I/O is to be as efficient as possible.

# Standard Error

There is standard read and write, but what about error?
By default, our terminal treats them the same.
It can be proven using a file path to show the differences..

# Standard input
They are quirky. They are affected by the SHELL, and all sorts of other things.
There is a library called

# Tell Shell to hand execution off:

`#!/usr/bin/env node`
This will tell your system (MAC) to go find NODE, and run this program as a NODE file.

Also, always run in strict mode, so put this in the top as well:
`"use strict"`


# How to change permissions and make it an executable script?

Add this to the command line, where ex1.js is the file name:

`chmod u+x ex1.js`

git submodule add git@github.com:llogan382/digging-into-node.git  /node/digging/_code


# TIP

Always add a HELP output to your files"



# How to access inputs?

Best way to get info into input, is through command line parameter.
Access the args passed in.

Access arguments passed to our program through process.args, which is an array of objects passed.

There are conventions for how this works. The dashes that get put in front of the args, and we could do regex to parse these items, but we want to use a package that uses this.

`npm install minimist`

If there is anything in the input that minimist can't figure out, it will place at the beginning of the items that are returned.

There are a bunch of different ways parameters can get parsed;

Minimist is a great resource, and it is used by TONS of other programs.
Another option is YARGS.