#!/usr/bin/env node
"use strict";

var path = require("path");

var args = require("minimist")(process.argv.slice(2), {
    boolean: ["help"],
    string: ["file"]
});


if (args.help) {
    printHelp();

}
else if (args.file ){
    let filepath = path.resolve(args.file);
    console.log(__dirname);
    console.log(filepath);
}
else {
    error("incorrect Usage", true);
}


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

