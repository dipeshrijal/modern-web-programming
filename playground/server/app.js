const http = require("http");

const server = http.createServer();

server.on('request', function (req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});

    res.write("Hello World \n");

    res.write("<h1> Welcome </h1>");

    res.end();
});

server.listen(8080, '127.0.0.1');

// http.createServer(function (req, res) {
//
//
//
// }).listen(8080, '127.0.0.1');