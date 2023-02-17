import ProfileModel from "../models/ProfileModel";

exports.CreateProfile= (req,res)=>{
    let reqBody=req.body;
    ProfileModel.create(reqBody, (err,data)=>{
        if (err){
            res.status(400).json({status:"fail", data: err})
        }
        else {
            res.status(201).json({status:"Success", data: data})
        }
    })

}