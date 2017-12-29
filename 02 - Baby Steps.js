
// process in nodejs is like document in the browser javascript.
// process.argv contains all the command line arguments
var args = process.argv;
var sum = 0;

// begin the loop with index 2 as process.argv[0]='node' and process.argv[1]='path-to-js-program' - always
for (let i = 2, length = args.length; i < length; i++) {
    // args are always strings. You need to coerce them to numbers before you add them.
    // You can coerce a string into a number in 2 ways:
    // 1. prefix with '+'
    // 2. pass them as arguments to Number() constructor
    sum += +args[i];
}

console.log(sum);