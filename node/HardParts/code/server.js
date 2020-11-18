const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const tweets = [
  "Hi",
  ":)",
  "Hello",
  ":p"
]
function doOnRequest(request, response){
  // Send back a message saying "Welcome to Twitter"
  // code here...

  if (request.method === 'GET' && request.url === '/') {
    // read the index.html file and send it back to the client
    // code here...
    response.writeHead(200, { 'content-type': 'text/html' });
    fs.createReadStream('index.html').pipe(response);

  }
  else if (request.method === 'POST' && request.url === '/sayHi') {


    fs.appendFileSync('hi_log.txt', 'Somebody said hello.\n');


  }
  else if (request.method === 'POST' && request.url === '/greeting') {
    // accumulate the request body in a series of chunks
    // code here...
    request.on('data', chunk => {
      if(chunk.toString() === 'hello'){
        console.log('hello there!');
      }
  });

  }
  else {
    // Handle 404 error: page not found
    // code here...

  }

}

const server = http.createServer(doOnRequest)

server.listen(3009);