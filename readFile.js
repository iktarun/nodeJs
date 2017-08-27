var fs = require("fs");
console.log("******Async:: Before Reading file*****");

// Async File Reading
fs.readFile("input.txt","utf8", function (err,data) {
	console.log("Aync data::\n\n"+data);
});
console.log("Async:: Executed after file reading");


// Sync File Reading

console.log("****Sync:: Before Reading file*********");

// Async File Reading
var data = fs.readFileSync("input.txt","utf8");
console.log("Sync data::\n\n"+data);

console.log("Sync:: Executed after file reading\n\n");


