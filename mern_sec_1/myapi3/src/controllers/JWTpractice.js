var jwt= require("jsonwebtoken");

exports.createToken= (req,res)=>{

    var payload = {

        exp: Math.floor(Date.now()/1000)+(60*6),
        data: {Name:"Azad", City: "Feni", admin: true}

    }
    let Token= jwt.sign(payload, "Azad123");

    res.send(Token);
}

exports.decodeToken =(req, res)=>{
    var Token = req.headers["token"];

    jwt.verify(Token,"Azad123", function(err,decode){
        if (err){
            res.status(401).json({"status":"Invalid Token", "data":err});
        }
        else
        {
            res.status(201).json({"status":"Token Decode", "data":decode});
        }
    })




}