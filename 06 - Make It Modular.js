const filteredLs = require("./filteredLsModule");

const dirname = process.argv[2];
const ext = process.argv[3];

const filteredFileList = filteredLs(dirname, ext, printFilesList);

function printFilesList(error, filesList) {
  if (error) {
    console.log("Error reading files from the directory", error);
  } else {
    for (let i = 0, length = filesList.length; i < length; i++) {
      console.log(filesList[i]);
    }
  }
}

// Official solution

// var filterFn = require('./solution_filter.js')
// var dir = process.argv[2]
// var filterStr = process.argv[3]

// filterFn(dir, filterStr, function (err, list) {
//   if (err) {
//     return console.error('There was an error:', err)
//   }

//   list.forEach(function (file) {
//     console.log(file)
//   })
// })
