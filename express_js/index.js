var express = require('express');
var bodyParser = require ('body-parser');


var app = express();
app.use(bodyParser.json());

app.post("/", function(req,res){

   let JSONData = req.body;

   let JSONSting= JSON.stringify(JSONData);
   res.send(JSONSting);

})

app.listen(1992, function(){
    console.log("Server is runnig");

})
