const StudentModel = require('../models/StudentModel');

exports.insertStudent=(req, res)=>{

   let reqBody= req.body;

   StudentModel.create(reqBody, (err,data)=>{
        if (err){
            res.header(400).json({status:"400",data: err })
        }
       
        else {
        res.header(201).json({status:"400",data: data })
    }

   })




};