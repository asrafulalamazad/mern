var http = require('http');
const { config } = require('process');
var server = http.createServer(function(req, res) {
    res.end("Hello World")
});

server.listen(5050);
console.log("Server run Successfully")