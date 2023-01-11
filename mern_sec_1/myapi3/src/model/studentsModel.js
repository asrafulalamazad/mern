const mongoose= require('mongoose');

const DataSchema = mongoose.connect({

Name: String,
Roll: String,
Class: String,
Remarks: String

})

const StudentsModel = mongoose.model('students', DataSchema);

module.exports =  StudentsModel;