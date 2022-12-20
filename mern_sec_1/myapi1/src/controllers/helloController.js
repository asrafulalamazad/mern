exports.Hello_get= (req,res)=>{
    res.status(200).json({"status":"Success", "data":"get method"})
}

exports.Hello_post= (req,res)=>{
    res.status(200).json({"status":"Success", "data":"post Method"})
}
