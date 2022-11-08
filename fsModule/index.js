var fs = require('fs');
var http = require('http');


//Sync fs module
var server = http.createServer(function(req, res) {
    if (req.url = '/') {
        var data = fs.readFileSync('home.html')
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();

    }
})

//Async fs system
// var server = http.createServer(function(req, res) {
//     if (req.url = '/') {
//         fs.readFile('home.html', function(error, data) {
//             res.writeHead(200, { 'Content-Type': 'text/html' })
//             res.write(data);
//             res.end();


//         })
//     }
// })



server.listen(4040);
console.log("server running");