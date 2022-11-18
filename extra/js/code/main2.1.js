var http = require('http');

var server = http.createServer(function (req, res) {

    if (req.url == "/") {
        res.writeHead(200, { 'Content-type': 'text/html' })
        res.write('<h3>Home page </h3>')
        res.end('end response');
    } else if
        (req.url == "/about") {
        res.writeHead(200, { 'Content-type': 'text/html' })
        res.write('<h3>about page </h3>')
        res.end('about response');
    }
    else {
        res.writeHead(404, { 'Content-type': 'text/html' })
        res.write('<h3>not found </h3>')
        res.end('else response')
    }
    });

server.listen(80);
console.log("Server 80 Run Successfull");