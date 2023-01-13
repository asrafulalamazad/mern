const mongoose= require('mongoose')
const Schema =  mongoose.Schema({
    Name: String,
    Roll: String,
    Class: String,
    Remarks: String
})

const studentModel = mongoose.model('schools',Schema);
module.exports= studentModel;
