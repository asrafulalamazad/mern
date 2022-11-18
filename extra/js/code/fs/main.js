var http = require('http');
//var URL = require('url');
var fs = require('fs');


var server = http.createServer(function (req, res) {

   if (req.url== "/"){
   
  fs.exists('main.jps',function(result){
   
   
   if (result){
	   res.end("Exist")
	   
   }else{"not Exist"}
     	 
   })
	 
   }});
	  

   
   


server.listen(8080);
console.log("Server 8080 Run Successfull");