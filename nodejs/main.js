var http = require('http');

var server = http.createServer(function(req, res) {
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'Text/html' })
        res.write('<h1>This Home Page </h1>')
        res.end();
    } else if (req.url == '/about') {
        res.writeHead(200, { 'Content-Type': 'Text/html' })
        res.write('<h1>This about Page </h1>')
        res.end();
    } else if (req.url == '/contact') {
        res.writeHead(200, { 'Content-Type': 'Text/html' })
        res.write('<h1>This contact Page </h1>')
        res.end();
    }

})


server.listen(5050);
console.log("Server run Successfully")