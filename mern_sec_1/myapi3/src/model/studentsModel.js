const mongoose= require('mongoose');

const schema = mongoose.connect({
    Name: String,
    Roll: String,
    Class: String,
    Remarks: String
})

//const StudentsModel = mongoose.model('students', DataSchema);
//const StudentsModel = mongoose.Model('students',DataSchema);
const StudentsModel = mongoose.model('students', schema);

module.exports =  StudentsModel;