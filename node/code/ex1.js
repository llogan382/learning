#!/usr/bin/env node
"use strict";

var args = require("minimist")(process.argv.slice(2), {
    boolean: ["help"],
    string: ["file"]
});


console.log(args);


// printHelp();

function printHelp(){
    console.log("ex1 usage:")
    console.log(" ex1.js --help");
    console.log("");
    console.log("--help             print this help");
    console.log("");

}

// Run node sysAuto.js 1>/dev/null in terminal.

