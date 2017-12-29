const fs = require("fs");
const path = require("path");

function filteredLs(dirname, ext, callback) {
  ext = "." + ext;
  fs.readdir(dirname, (error, data) => {
    if (error) {
      callback(error);
    } else {
      const filteredFileList = data.filter(file => {
        return path.extname(file) === ext;
      });

      callback(null, filteredFileList);
    }
  });
}

module.exports = filteredLs;

// official solution

// var fs = require('fs')
// var path = require('path')

// module.exports = function (dir, filterStr, callback) {
//   fs.readdir(dir, function (err, list) {
//     if (err) {
//       return callback(err)
//     }

//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })

//     callback(null, list)
//   })
// }
