const fs = require("fs");

const dirPath = process.argv[2];
const fileExtension = process.argv[3];

const regex = new RegExp(`\.${fileExtension}$`);
// returns an array of files and directories in the given directory
fs.readdir(dirPath, (err, data) => {
  // filter files with the given file extension
  const filteredFiles = data.filter(file => {
    return regex.test(file);
    //file.endsWith("." + fileExtension); won't work. It returns true if the file name contains the extension, not necessarily at the end.
  });

  filteredFiles.forEach(file => console.log(file));
});

// Official solution

// var fs = require('fs')
// var path = require('path')

// var folder = process.argv[2]
// var ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// });
