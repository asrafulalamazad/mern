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
    findQuery(MyMongoClient);
}
});

function findQuery(MyMongoClient){
        var myDb= MyMongoClient.db('school');
        var myCollection = myDb.collection('students'); 


    var ItemObj= {phone: "01670298486"};
  
       
        myCollection.find(ItemObj).toArray(function(error, resultobj){
         

            
            console.log(resultobj);
        })
        }


