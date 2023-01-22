const { Query } = require('mongoose');
const StudentsModel = require('../model/studentsModel')

// Create

 exports.insertStudent = (req,res)=>{
    
    let reqBody= req.body;
        StudentsModel.create(reqBody, (err,data)=>{
        if (err){
            res.status(400).json({"status":"failed", "data":err})
        }
                else
            {
                res.status(200).json({"status":"success", "data":data})
            }
    })
}

//Read

exports.readStudent = (req, res)=>{
    let Query= {}
    let Projection = "Name Roll Class Remarks"

    StudentsModel.find(Query,Projection, (err,data)=>{
        if (err){
            res.status(400).json({"status":"failed", "data":err})
        }
                else
            {
                res.status(200).json({"status":"success", "data": data})
            }
    });


}

//update
exports.updateStudent = (req,res)=>{

    let id= req.params.id;
    let Query = {_id:id}
    let reqBody= req.body;

    StudentsModel.updateOne(Query, reqBody, (err,data)=>{
    if (err){
        res.status(400).json({"status":"failed", "data":err})
    }
            else
        {
            res.status(201).json({"status":"update success", "data":data})
        }
})
}
