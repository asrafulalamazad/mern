var MongoClient= require('mongodb').MongoClient;

var URL="mongodb+srv://asrafuldoc:Azad20121987@cluster0.kxn7sfi.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(URL, function(error){
    if(error){
        console.log('Database  connection fail')
    }else
    {
        console.log('Database Connected')
    }
})

