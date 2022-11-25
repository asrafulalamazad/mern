var mongodb= require("mongodb");
var MongoClient= mongodb.MongoClient;

var AtlasURL= "mongodb+srv://asrafuldoc:Azad20121987@cluster0.kxn7sfi.mongodb.net/school?retryWrites=true&w=majority";


MongoClient.connect(AtlasURL,function(error,MyMongoClient){
if (error){
    console.log("Database connection Failed")
}
else{
    console.log("Database Connection Success")
    InsertData(MyMongoClient);
    
}
});

function InsertData(MyMongoClient){
    var myDb= MyMongoClient.db('school');
    var myCollection= myDb.collection('students');

    var myData= {name:"Asraful alam", phone: "01670298486", class: "One", father:'Nur Islam'};

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
