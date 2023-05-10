const TaskModel = require("../models/TaskModel")

// Create

exports.addTask = (req, res)=>{
    let reqBody= req.body;
    TaskModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"Fail", data: err})
        }
        else {
            res.status(200).json({status:"Success", data: data})
        }
    })
}