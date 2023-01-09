// const StudentModel = require('../models/StudentModel');
const StudentModel = require('../models/StudentModel')


exports.insertStudent=(req, res)=>{

   let reqBody= req.body;

   StudentModel.create(reqBody, (err,data)=>{
        if (err){
            res.status(400).json({error:"invalid request",data: err })
        }
       
        else {
        res.status(201).json({success:true , data: data });
    }

   })


};