var mongodb= require("mongodb");
var MongoClient= mongodb.MongoClient;

var AtlasURL= "mongodb+srv://asrafuldoc:Azad20121987@cluster0.kxn7sfi.mongodb.net/schools?retryWrites=true&w=majority";


MongoClient.connect(AtlasURL,function(error){
if (error){
    console.log("Database connection Failed")
}
else{
    console.log("Database Connectd")
}
})