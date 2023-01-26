var jwt= require("jsonwebtoken");


module.exports = (req, res, next)=>{

    var Token = req.headers["token"];

    jwt.verify(Token,"Azad123", function(err,decode){
        if (err){
            res.status(401).json({"status":"Invalid Token", "data":err});
        }
        else
        {
          next();
        }
    })




}