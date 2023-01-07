const { default: mongoose } = require("mongoose");


const dataSchema= mongoose.Schema=({
    name: String,
    phone: String,
    city: String,
    roll: String

});


const StudentModel= mongoose.model('students', dataSchema);
module.exports = StudentModel;