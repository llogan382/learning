function doOnIncoming(incomingData, functionsToSetOutgoingData) {
  functionsToSetOutgoingData.end("Welcome to Twitter!");
}
const server = http.createServer(doOnIncoming);
server.listen(80);
