var http = require('http');
//var URL = require('url');
var fs = require('fs');


var server = http.createServer(function (req, res) {

    if (req.url == "/") {

        fs.readFile('main.js', function (error, data) {
            res.writeHead(200, { 'Content-type': 'text/html' })
            res.write(data)
            res.end();
        })


    }
});

server.listen(80);
console.log("Server 80 Run Successfull");