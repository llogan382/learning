


Thread of execution: The way the computer reads each line of code.

To run the code, we need a new EXECUTION CONTEXT.

TO run code?
We need memory, and a way to read the code line by line.

What does javascript do?
1. Saves code in data
2. Runs code.

We tell JS to run the code when we put parens on the end of the function.

# What is our goal?

Read the INCOMING MESSAGE, and look into C++ for the data.

We need to OPEN the network to receive requests through a SOCKET.

`http.createServer()` will open the network to receive HTTP requests.
This line also automatically returns an object filled with functions.

## What are we trying to do?

Take the incoming message, read it, and send back the right data.
NODE will automatically run the code when a request comes in.
```
function doOnIncoming(incomingData, functionsToSetOutgoingData){
 functionsToSetOutgoingData.end("Welcome to Twitter!")
}
const server = http.createServer(doOnIncoming)
server.listen(80)
```
