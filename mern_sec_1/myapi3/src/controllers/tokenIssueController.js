var jwt= require("jsonwebtoken");


exports.tokenIssue=  (req,res)=>{

    var payload = {

        exp: Math.floor(Date.now()/1000)+(60*60), // one hour time
        data: {Name:"Azad", City: "Feni", admin: true}

    }
    let Token= jwt.sign(payload, "Azad123");

    res.send(Token);
}
