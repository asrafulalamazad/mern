var mongodb= require("mongodb");
var MongoClient= mongodb.MongoClient;

var AtlasURL= "mongodb+srv://asrafuldoc:Azad20121987@cluster0.kxn7sfi.mongodb.net/school?retryWrites=true&w=majority";


MongoClient.connect(AtlasURL,function(error,MyMongoClient){
if (error){
    console.log("Database connection Failed")
}
else{
    console.log("Database Connection Success")
    //  InsertData(MyMongoClient);
    //  deleteOne(MyMongoClient);
    //  deleteAll(MyMongoClient);
    // findOne(MyMongoClient);
    // findAll(MyMongoClient);
   // findQueryLimit(MyMongoClient);
 //  findQuerybySort(MyMongoClient);
 //  updateData(MyMongoClient);
 CreateCollection(MyMongoClient)
}
});

function CreateCollection(MyMongoClient){
    var myDb=MyMongoClient.db('school')
    myDb.createCollection('teachers',function(error, result){
       if (error){console.log('Not Create Collection');} 
       
       else {
       console.log("Collection Created");
    }
    })

}