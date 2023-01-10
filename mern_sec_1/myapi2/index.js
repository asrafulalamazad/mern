const express= require('express');

app= express();


app.get("/asraful",function(req,res){
    
    res.send("ASRAFUL ALAM")

})



app.listen(8000, function(){
    console.log("server run")
})