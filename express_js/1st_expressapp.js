var express= require('express');


app= express();

app.get('/', function(req, res){
    res.send("this is get methode")
})
app.post('/contact', function(req, res){
    res.send("this post mathod")
})
app.put('/put', function(req, res){
    res.send("put mathod")
})

app.delete('/delete', function(req, res){
    res.send("delete method")
})




app.listen(1992, function (){
    console.log ('Server runnig')
})

