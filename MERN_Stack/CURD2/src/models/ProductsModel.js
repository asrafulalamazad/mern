const mongoose = require('mongoose');
const DataSchema=mongoose.Schema(
    {
        ProductName:{type:String},
        ProductCode: {type:String},
        Img: {type:String},
        UnitPrice: {type:String},
        Qty: {type:String},
        TotalPrice: {type:String},
        CreateDate: {type:Date, Default: Date.now()},
    },
    {versionKey: false}
)

const ProductModel= mongoose.model('products',DataSchema);
module.exports=ProductModel;




