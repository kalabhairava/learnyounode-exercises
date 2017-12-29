const fs = require("fs");

fs.readFile(process.argv[2], "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading the file", process.argv[2]);
  } else {
    console.log(data.split("\n").length - 1);
  }
});

// Similar to the solution for exercise 3, but it uses callbacks to make use of asynchronous methods
