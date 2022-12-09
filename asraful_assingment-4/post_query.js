var express = require('express');

var app = express();

app.post("/", function(req,res){

    let name = req.query.name;
    res.send(name).end();

})


app.listen(1992, function(){
    console.log("Server is runnig")

})
