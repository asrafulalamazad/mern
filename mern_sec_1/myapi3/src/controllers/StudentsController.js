const StudentsModel = require('../model/studentsModel')

 exports.insertStudent = (req,res)=>{
    
    let reqBody= req.body;
    
    studentModel.create(reqBody, (err,data)=>{
        if (err){
            res.status(400).json({"status":"failed", "data":err})
        }
                else
            {
                res.status(400).json({"status":"failed", "data":data})
            }
    })
}