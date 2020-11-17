# How to run node for sys administration

## What to do first?

How to get info INTO and OUT OF the program?

## Understand I/O (In Out)

What is the standard? **POSIX** is the way that programs integrate with **LINUX** It is the set of 3 streams that integrate with the linux system: Input, output, and error.
How to access these streams? Node exposes these streams with something called *process*

The **BROWSER** cannot show the POSIX, because it does not run on this I/O process.

STREAMS are a data structure in node

## What about Console.error()?


if we run `node sysAuto.js 1>/dev/null`, the `>` is a redirect, which sends the file descriptor to the /dev/null, wich is like a trash can.

SO, if we utilize the I/O/Error, we need to use these efficiently for regular debugging outputs.

## Standard Input

Do not use the raw stream; they are more quirky than the output stream.