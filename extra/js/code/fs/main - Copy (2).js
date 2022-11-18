var http = require('http');
//var URL = require('url');
var fs = require('fs');


var server = http.createServer(function (req, res) {

   if (req.url== "/"){
   
   
        fs.rename( 'home1.html','asraful.doc', function (error) {
			
			
            if (error) {

                res.writeHead(200, { 'content-type':'text/html'});
                res.write("file rename failed")
                res.end()
            } else {

                res.writeHead(200, { 'content-type': 'text/html' });
                res.write("file rename success")
                res.end()
            }

        })
		
		
    
   }    });
   


server.listen(80);
console.log("Server 80 Run Successfull");