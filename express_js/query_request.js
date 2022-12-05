var express= require('express');

app = express();

app.get('/',function(req,res){

    let fname= req.query.fname;
    let lname= req.query.lname;

   let name= res.send(fname+' '+lname);

    if(name= "Asraful Alam"){
        console.log("Your Full Name is ASRAFUL ALAM AZAD ")
    }

})


app.listen(1992, function(){
    console.log('Server Running')
})