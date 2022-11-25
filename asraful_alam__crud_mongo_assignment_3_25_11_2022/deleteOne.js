var mongodb= require("mongodb");
var MongoClient= mongodb.MongoClient;

var AtlasURL= "mongodb+srv://asrafuldoc:Azad20121987@cluster0.kxn7sfi.mongodb.net/school?retryWrites=true&w=majority";


MongoClient.connect(AtlasURL,function(error,MyMongoClient){
if (error){
    console.log("Database connection Failed")
}
else{
    console.log("Database Connection Success")
    //InsertData(MyMongoClient);
    deleteOne(MyMongoClient);
}
});

// function InsertData(MyMongoClient){
//     var myDb= MyMongoClient.db('school');
//     var myCollection= myDb.collection('students');

//     var myData= {name:"Rezvin Sultana", phone: "01619909899", class: "12"};

//    myCollection.insertOne(myData);

//     myCollection.insertOne(myData,function(error){
//         if(error) {
//             console.log('Inserted Failed')
//         } else
//         {
//             console.log('Inserted');
//         }
//     })
// }


function deleteOne(MyMongoClient){
    var myDb= MyMongoClient.db('school');
var myCollection=myDb.collection('students');
var myData={name: 'Mannan'}

myCollection.deleteOne(myData, function(error){
    if(error){
        console.log('Not Deleted');
    }else{
    console.log('Deleted');
    }
})

}