#!/usr/bin/env node

"use strict";

var util = require("util");
var childProc = require("child_process");


// ************************************

const HTTP_PORT = 8055;
// const MAX_CHILDREN = 5;

var delay = util.promisify(setTimeout);


main().catch(console.error);


// ************************************

async function main() {

	var child = childProc.spawn("node",["ex7-child.js"]);

	child.on("exit",function(code){
		console.log("Child finished",code);
	})
	// console.log(`Load testing http://localhost:${HTTP_PORT}...`);
}
