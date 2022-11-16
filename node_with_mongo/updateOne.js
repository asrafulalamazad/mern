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
   updateData(MyMongoClient);
}
});

function updateData(MyMongoClient){
    var myDb=MyMongoClient.db('school');
    var myCollection= myDb.collection('students');

    
    var myQuery= {name:'alam'};
    var newVales= {$set: {name: 'Asraful Alam',phone: '01710430878', dist: 'Feni' }}


    myCollection.updateOne(myQuery,newVales, function(error,values){
        console.log(values);
    })
}