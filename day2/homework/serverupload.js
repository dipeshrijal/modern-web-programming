const http = require("http");
const fs = require("fs");

http.createServer(function (req, res) {
    console.log(new Date().getTime());
    fs.readFile('test.jpg', (err, data) => {
        if (err) throw err;
        res.end(data);
    });
    console.log(new Date().getTime());
    // console.log(new Date().getTime());
    // const src = fs.createReadStream('test1.jpg');
    // src.pipe(res);
    // console.log(new Date().getTime());
}).listen(8080);


///create readStream is faster than readFile.