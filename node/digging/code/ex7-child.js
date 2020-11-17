"use strict";

// var fetch = require("node-fetch");


// ************************************

const HTTP_PORT = 8055;


main().catch(() => 1);


// ************************************

async function main() {
	// TODO
	try {
		let res = await fetch('http://localhost:8055/get-records');
		if(res && res.ok){
			let records = await res.json();
			if(records && records.length > 0){
				process.exitCode = 0;
				return;
			}
		}
	}
	catch (err){
		console.log(err);
	}
	process.exitCode = 1;
}
