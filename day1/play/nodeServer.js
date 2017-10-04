const http = require("http");

http.createServer(function (req, res) {
    res.writeHead(200);
    res.write("<p> Processing Request </p>");

    setTimeout(function () {
        res.write("<p>Process Completed! </p>");
        res.end();
    }, 5000);

    res.write("<p> Try </p>");
}).listen(8080);