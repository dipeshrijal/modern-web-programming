const http = require("http");
const fs = require("fs");
const url = require("url");

http.createServer(function (req, res) {

    const path = url.parse(req.url).path;

    let filename = path.substring(1);
    // const src = fs.createReadStream(filename);
    // src.pipe(res);

    fs.readFile(filename, (err, data) => {
        if (err) throw err;
        res.end(data);
    });

}).listen(8080);