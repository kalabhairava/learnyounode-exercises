// This solution uses promise based approach. I feel it is much cleaner approach than the official solution provided.

const http = require("http");

// grab the URLs from command line args
const URLs = [process.argv[2], process.argv[3], process.argv[4]];

// returns a promise that will be resolved with the complete data that is returned from the given URL
function getPromise(URL) {
  return new Promise((resolve, reject) => {
    http.get(URL, response => {
      let contents = "";

      response.on("data", data => {
        contents = contents + data;
      });

      response.on("end", () => {
        resolve(contents);
      });

      response.on("error", () => {
        reject(error);
      });
    });
  });
}

const promise1 = getPromise(URLs[0]);
const promise2 = getPromise(URLs[1]);
const promise3 = getPromise(URLs[2]);

// Promise.all() converts an array of promises into a single promise. It is resolved when all the promises in the array are resolved.
// The value resolved will be an array of resolution values of all the promises
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
Promise.all([promise1, promise2, promise3])
  .then(responses => {
    responses.forEach(response => console.log(response));
  })
  .catch(error => console.log(error));

//   JUGGLING ASYNC (Exercise 9 of 13)

//     This problem is the same as the previous problem (HTTP COLLECT) in that
//     you need to use http.get(). However, this time you will be provided with
//     three URLs as the first three command-line arguments.

//     You must collect the complete content provided to you by each of the URLs
//     and print it to the console (stdout). You don't need to print out the
//     length, just the data as a String; one line per URL. The catch is that you
//     must print them out in the same order as the URLs are provided to you as
//     command-line arguments.

//    ─────────────────────────────────────────────────────────────────────────────

//    ## HINTS

//     Don't expect these three servers to play nicely! They are not going to
//     give you complete responses in the order you hope, so you can't naively
//     just print the output as you get it because they will be out of order.

//     You will need to queue the results and keep track of how many of the URLs
//     have returned their entire contents. Only once you have them all, you can
//     print the data to the console.

//     Counting callbacks is one of the fundamental ways of managing async in
//     Node. Rather than doing it yourself, you may find it more convenient to
//     rely on a third-party library such as [async](https://npmjs.com/async) or
//     [after](https://npmjs.com/after). But for this exercise, try and do it
//     without any external helper library.

// OFFICIAL SOLUTION

// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0

// function printResults () {
//   for (var i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }

//       results[index] = data.toString()
//       count++

//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }

// for (var i = 0; i < 3; i++) {
//   httpGet(i)
// }
