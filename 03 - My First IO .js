const fs = require("fs");

const filePath = process.argv[2];

// readFileSync() returns a buffer object. Calling toString() on buffer object returns a string (of file contents)
const fileContents = fs.readFileSync(filePath).toString();

// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1

// To count the number of new lines, split the file contents with separator '\n' (new line)
const arrayOfLines = fileContents.split("\n");

// The last line in the file won't contain a \n, so reduce the number of new lines by 1
const numOfNewLines = arrayOfLines.length - 1;

console.log(numOfNewLines);
