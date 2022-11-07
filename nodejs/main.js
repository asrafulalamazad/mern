var http = require('http');
var URL = require('url');

var server = http.createServer(function(req, res) {


    // var myURL = "http://github.com/asraufulalam?id=900&&name=asraful";
    var myURL = "https://www.google.com/search?q=asrafulalam&sxsrf=ALiCzsYpyOVtvmYKSpg0DhyouOrqn-w8Zw%3A1667848377472&source=hp&ei=uVhpY4rcGoCeseMP8q6CmAY&iflsig=AJiK0e8AAAAAY2lmyRFoclFfb0cMFUw_-w7gmxxd4CrU&ved=0ahUKEwjKnM6w45z7AhUAT2wGHXKXAGMQ4dUDCAg&uact=5&oq=asrafulalam&gs_lcp=Cgdnd3Mtd2l6EAMyBwgAEIAEEA0yBwgAEIAEEA0yBwgAEIAEEA0yBwgAEIAEEA0yBwgAEIAEEA0yBwgAEIAEEA0yBwgAEIAEEA0yBwgAEIAEEA0yBwgAEIAEEA0yCgguEIAEENQCEA06BAgjECc6CgguEMcBEK8BECc6BQgAEJECOgsIABCABBCxAxCDAToFCAAQgAQ6DgguEIAEELEDEMcBENEDOg4ILhCABBCxAxCDARDUAjoLCC4QxwEQrwEQkQI6CAguELEDEIAEOgsILhCABBCxAxCDAToICC4QsQMQgwE6CAgAEIAEELEDOgcIIxDqAhAnOhEILhCABBCxAxCDARDHARDRAzoFCC4QgAQ6BQguEJECOggILhCABBCxAzoFCAAQsQM6DggAEIAEELEDEIMBEMkDOgsILhCABBDHARCvAToICAAQsQMQgwE6BwgAEIAEEAo6CAguEIAEENQCOgcIIxCwAhAnOgcILhCABBANOgkIABCABBANEAo6BQgAEKIEUABY4Rxg2h5oAnAAeACAAaQBiAGXDZIBBDAuMTOYAQCgAQGwAQo&sclient=gws-wiz";

    var myURLObj = URL.parse(myURL);


    var urlHost = myURLObj.host;
    var urlPath = myURLObj.path;
    //var urlSearch = myURLObj.search;

    res.writeHead(200, {
        'Content-Type': 'Text/html'
    });
    //res.write(urlHost);
    res.write(urlPath);
    //res.write(urlsearch);
    res.end();
})



server.listen(5050);
console.log("Server run Successfully")