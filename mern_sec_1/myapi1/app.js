const express= require("express");
const router = require("./src/routes/api");


const app = new express();




app.use("/api/v1",router)


//undefined router start
app.use("*", (req,res)=>{
    res.status(404).json({"status": "Failed", "data":"Not found"})
})
//undefined router end



module.exports=app