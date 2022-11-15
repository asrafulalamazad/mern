var mongodb= require("mongodb");
var MongoClient= mongodb.MongoClient;

var AtlasURL= "mongodb+srv://asrafuldoc:Azad20121987@cluster0.kxn7sfi.mongodb.net/school?retryWrites=true&w=majority";


MongoClient.connect(AtlasURL,function(error,MyMongoClient){
if (error){
    console.log("Database connection Failed")
}
else{
    console.log("Database Connectd")
}
});

function InsertData(MyMongoClient){
    var myDb= MyMongoClient.db('school');
    var myCollection= myDb.collection('students');

    var myData= {name:"Asaful Alam", phone: "01710430878", class: "Ten"};

  //  myCollection.insertOne(myData);

    myCollection.insertOne(myData,function(error){
        if(error) {
            console.log('Inserted Failed')
        } else
        {
            console.log('Inserted');
        }
    })


}