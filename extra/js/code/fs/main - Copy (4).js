var http = require('http');
//var URL = require('url');
var fs = require('fs');


var server = http.createServer(function (req, res) {

   if (req.url== "/"){
   
   
     let error =   fs.unlinkSync('bangladesh.txt'); 
						
            if (error) {

                res.writeHead(200, {'content-type':'text/html'});
                res.write("file Delete failed");
                res.end();
				
            } else {

                res.writeHead(200, {'content-type': 'text/html' });
                res.write("file Delete success");
                res.end();
            }

        };
		
		    
   }  )  ;
   


server.listen(80);
console.log("Server 80 Run Successfull");