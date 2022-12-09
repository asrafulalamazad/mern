var express= require('express');

app = express();

app.get('/',function(req,res){

//     let fname= req.query.fname;
//     let lname= req.query.lname;

//    let name= res.send(fname+' '+lname);

    // if(name= "Asraful Alam"){
    //     console.log("Your Full Name is ASRAFUL ALAM AZAD ")
    // }

     let fname= req.header("fname")
     let lname= req.header("lname")
     let c= req.header('User-Connection')

const fullName= fname+' '+lname

res.send(fullName)

res.end(c)
})


app.listen(1992, function(){
    console.log('Server Running')
})