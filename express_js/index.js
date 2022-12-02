var express= require('express');


app= express();

app.get('/', function(req, res){
    res.send("1st Express Programme")
})



app.listen(1992, function (){
    console.log ('Server runnig')
})

