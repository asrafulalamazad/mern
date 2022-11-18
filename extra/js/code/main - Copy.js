var http = require('http');
var URL = require('url');


var server = http.createServer(function (req, res) {

    var MyURL = "https://customers.arvixe.com/index.php?rp=/login";

    var MyUrlObj = URL.parse(MyURL, true);
    var HostName = MyUrlObj.host;
    var PathName = MyUrlObj.path;
    var searchName = MyUrlObj.search;


    res.writeHead(200, { "content-type": "text/html" });
    res.write(HostName);
    res.write(PathName);
    res.write(searchName);
    res.end();





    });

server.listen(80);
console.log("Server 80 Run Successfull");