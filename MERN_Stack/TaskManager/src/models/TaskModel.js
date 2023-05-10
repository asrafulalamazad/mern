const mongoose=  require("mongoose");

const DataSchema= mongoose.Schema({
        title: {type: String, unique: true},
        description:{type: String},
        status:{type: String},
        email:{type: String},
        createDate:{type: Date, default:Date.now}
    },{versionKey:false}
)
const TaskModel= mongoose.model("tasks", DataSchema);
module.exports = TaskModel;