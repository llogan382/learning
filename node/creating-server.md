# What happens under the hood?

doOnIncoming() is a function that run automatically when it receives a request.

It automatically creates a `req` and `res` object.

In node semi colons matter.

HTTP requests default to port 80.

## Request and Response.

Node automatically makes objects (including the incoming object).

It gives us on object of functions, and gets auto-run for

Messages are sent in HTTP format.
What is in an http message?

1. Request type: Like "Get"
2. Headers.
3. The Body.

The request gets bundled in an object.

## Express

It is pre-written code that can separate the parts of the incoming request.
