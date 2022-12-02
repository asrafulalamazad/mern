var express= require('express');


app= express();

app.get('/', function(req, res){
    res.send("root")
})
app.get('/contact', function(req, res){
    res.send("contact")
})
app.get('/about', function(req, res){
    res.send("contact")
})



app.listen(1992, function (){
    console.log ('Server runnig')
})

