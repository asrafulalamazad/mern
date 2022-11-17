var fs= require('fs');
var http = require('http');


var server = http.createServer(function(req, res) {
    
    if (req.url =='/') {
        let htmlPage = fs.readFileSync('home.html','utf8');
        res.end(htmlPage);

    } else if (req.url == '/about') {
        let htmlPage = fs.readFileSync('about.html','utf8');
            res.end(htmlPage);
    } else if (req.url == '/contact') {
        let htmlPage = fs.readFileSync('contact.html','utf8');
        res.end(htmlPage);
    } else {
         res.writeHead(404, { 'Content-Type': 'Text/html' });
         res.write('<h1>Web page Not found. </h1>')
         res.end();

    }

});


server.listen(80);
console.log("Server Running");