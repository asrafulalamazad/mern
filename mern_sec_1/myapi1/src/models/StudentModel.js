//const { default: mongoose } = require("mongoose");
const mongoose= require('mongoose')

const DataSchema= mongoose.Schema=({
    name: String,
    roll: String,
    class: String,
    remarks: String

})
const StudentModel= mongoose.model('students', DataSchema);
module.exports = StudentModel;