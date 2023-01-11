const app = require("./app");


app.listen(80);


//undefined router start
app.use("*", (req,res)=>{
    res.status(404).json({"status": "Failed", "data":"Not found"})
})
//undefined router end