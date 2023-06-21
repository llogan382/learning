const tweets = ["Hi",
"💩", "Hello","🙏🏻","😎"]
function doOnIncoming(incomingData, functionsToSetOutgoingData){
 const tweetNeeded = incomingData.url.slice(8)-1
 functionsToSetOutgoingData.end(tweets[tweetNeeded])
}
const server = http.createServer(doOnIncoming)
server.listen(80)
