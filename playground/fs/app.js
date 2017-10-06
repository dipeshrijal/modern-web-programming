const fs = require("fs");

const zlib = require("zlib");

// let greet = fs.readFileSync(__dirname + '/greet.txt', "utf8");
//
// fs.writeFileSync('destination.txt', greet);
//
//
// console.log(greet);
//
// let greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8',  (err, data) => {
//     if (err) {
//         console.log(err.message);
//     } else {
//         console.log(data);
//     }
//
// });

const readable = fs.createReadStream(__dirname + '/greet.txt',
    { encoding: "utf8", highWaterMark : 2 * 1024 }
);

const writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

// readable.on('data', function (chunk) {
//     console.log(chunk);
//     writable.write(chunk);
// });
let compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');
let gzip =  zlib.createGzip();

readable.pipe(writable);

readable.pipe(gzip).pipe(compressed);