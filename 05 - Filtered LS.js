const fs = require("fs");

const dirPath = process.argv[2];
const fileExtension = process.argv[3];

const regex = new RegExp(`\.${fileExtension}$`);
// TODO: modify this to make sure that the file name contains at least on character.
// something like `?*\.${fileExension}$`

// returns an array of files and directories in the given directory
fs.readdir(dirPath, (err, data) => {
  // filter files with the given file extension
  const filteredFiles = data.filter(file => {
    return regex.test(file); // The problem with this is it will match files like .txt, .md, etc i.e. files with just extension, but no valid file name.
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
