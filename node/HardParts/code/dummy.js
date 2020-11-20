let cleanedTweets = ""; //In Node

function cleanTweets (tweetsToClean){ //in Node
    // algorithm to remove bad tweets from
    `tweetsToClean`
}

function doOnNewBatch(data){ //in Node; autorun function
    cleanedTweets += cleanTweets(data);
}

const accessTweetsArchive = fs.createReadStream('./tweetsArchive.json'); //Use JS to set equal to a NODE function, to load the file.

// This creates an object in JS with METHODS for NODE to use.

accessTweetsArchive.on('data', doOnNewBatch); //