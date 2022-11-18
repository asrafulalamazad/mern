var http = require('http');

var server=http.createServer(function(a,b){
b.end('Hello Bangladesh')

});

server.listen(80);
console.log('server running');