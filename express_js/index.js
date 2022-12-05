var express= require('express');

app = express();

app.get('/',function(req,res){
    res.send("hello")
})

app.listen(1992, function(){
    console.log('Server Running')
})