const TaskModel = require("../models/TaskModel")

// Create

exports.createTask = (req, res)=>{
    let reqBody= req.body;
    reqBody.email= req.headers['email']

    TaskModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"Fail", data: err})
        }
        else {
            res.status(200).json({status:"Success", data: data})
        }
    })
}

// exports.deleteTask= (req,res)=>{
//     let id= req.params.id;
//     let Query = [_id=id];
//
//     TaskModel.remove(Query,(err,data)=>{
//         if(err){
//             res.status(400).json({status:"Fail", data: err})
//         }
//         else {
//             res.status(200).json({status:"Success", data: data})
//         }
//     })
//
// }
exports.deleteTask=(req,res)=>{
    let id= req.params.id;
    let Query={_id:id};
    TasksModel.remove(Query,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}



exports.updateTaskStatus= (req,res)=>{
    let id= req.params.id;
    let status= req.params.status;
    let Query = [_id=id];
    let reqBody= {status:status};

    TaskModel.updateOne(Query,reqBody,(err,data)=>{
        if(err){
            res.status(400).json({status:"Fail", data: err})
        }
        else {
            res.status(200).json({status:"Success", data: data})
        }
    })

}