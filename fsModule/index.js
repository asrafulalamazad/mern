var fs = require('fs');
var http = require('http');

//Sync fs module write file
var server = http.createServer(function(req, res) {
    if (req.url = '/') {
        var error = fs.writeFileSync('ahnaf_sync.txt', 'Ahnaf bin Asraful with sysc')
        if (error) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("file write fail");
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("file write success sync");
            res.end();
        }
    }

})




// //Async fs module write file
// var server = http.createServer(function(req, res) {
//     if (req.url = '/') {
//         fs.writeFile('ahnaf_async.txt', 'Ahnaf bin Asraful', function(error) {
//             if (error) {
//                 res.writeHead(200, { 'Content-Type': 'text/html' });
//                 res.write("file write fail");
//                 res.end();
//             } else {
//                 res.writeHead(200, { 'Content-Type': 'text/html' });
//                 res.write("file write success");
//                 res.end();
//             }
//         })
//     }
// });





// //Sync fs module read file
// var server = http.createServer(function(req, res) {
//     if (req.url = '/') {
//         var data = fs.readFileSync('home.html')
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write(data);
//         res.end();

//     }
// });

//Async fs system read file
// var server = http.createServer(function(req, res) {
//     if (req.url = '/') {
//         fs.readFile('home.html', function(error, data) {
//             res.writeHead(200, { 'Content-Type': 'text/html' })
//             res.write(data);
//             res.end();


//         })
//     }
// });



server.listen(8080);
console.log("server running");