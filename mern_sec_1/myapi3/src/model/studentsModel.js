const mongoose= require('mongoose')
const Schema =  mongoose.Schema({
    Name: String,
    Roll: String,
    Class: String,
    Remarks: String
})

const studentModel = mongoose.model('students',Schema);
module.exports= studentModel;
