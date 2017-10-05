const http = require("http");
const fs = require("fs");

http.createServer(function (req, res) {
    const src = fs.createWriteStream("destination.txt");
    req.pipe(src);
}).listen(8080);