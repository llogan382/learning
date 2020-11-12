#!/usr/bin/env node
"use strict";

var util = require("util");
var path = require("path");
var fs = require("fs");

var getStdin = require("get-stdin");

var args = require("minimist")(process.argv.slice(2), {
    boolean: ["help", "in"],
    string: ["file"]
});


if (args.help) {
    printHelp();

}
else if (args.in) {
    // TODO: Handle stdin
    getStdin().then(processFile).catch(error);

}
else if (args.file){
    fs.readFile(path.resolve(args.file),function onContents(err,contents){

        if (err) {
            error(err.toString());

        } else {
            processFile(contents);

        }
    });

}
else {
    error("incorrect Usage", true);
}

function processFile(contents){
 contents = contents.toUpperCase();
 process.stdout.write(contents);
};
    // console.log(contents);



// printHelp();
function error(msg, includeHelp = false){
    console.error(msg);
    if(includeHelp){
        console.log("");
        printHelp();
    }

}


function printHelp(){
    console.log("ex1 usage:");
    console.log("  ex1.js --file={FILENAME");
    console.log("");
    console.log(" ex1.js --help");
    console.log("");
    console.log("--help             print this help");
    console.log("--file={FILENAME}     priocess the file");
    console.log("");
}

// Run node sysAuto.js 1>/dev/null in terminal.

