const mongoose= require('mongoose')
const Schema =  mongoose.Schema({
    Name: {type:String, required: true, unique: true},
    Roll: {type:Number, min: [6,"min 6 you give {VALUE}"], max:[10,"max 10"], required: true},

    // Phone: {
    //     type: String,
    //     validate: {
    //       validator: function(v) {
    //         if(v.length===11){return true} else {return false}
            
            
    //         //return /\d{3}-\d{3}-\d{4}/.test(v);
    //       },
    //       message:` is not a valid phone number!`
    //     },
    //     //required: [true, 'User phone number required']
    //   },

    Phone:{
        type:String,
            validate:{
                validator: function(v){
                    if(v.length ===11 ){
                        return true
                    }else{
                        return false
                    }
                },
                message:"provide 11 digit phone number"
                },
            },
    Class: {type:String},
    Admissaion: {type: Date, default: Date.now},
    Remarks: {type:String, default:"No Remarks"},
    phone: {type:String, default: "No Number"}
},{versionKey: false})

const studentModel = mongoose.model('students_info',Schema);
module.exports= studentModel;
