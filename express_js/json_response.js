var express= require('express');


app= express();

app.get('/', function(req, res){
    res.send("this is get methode")
})
app.post('/contact', function(req, res){
    res.send("this post mathod")
})
app.put('/put', function(req, res){
    res.send("put mathod")
})

app.delete('/delete', function(req, res){
    res.send("delete method")
})


app.post('/', function(req, res){
    res.status(401);
    res.end("res ")
})


//json response

app.get('/json', function(req, res){
    res.status(201);
    
    let myData= [
        {
            name: "ASRAFUL ALAM",
            city: 'feni',
            phone: "09657687"
        }
    ]
    res.json(myData);


})

app.get('/download', function(req, res){

    res.download('./uploads/nature.jpg')

})






//server port
app.listen(1992, function (){
    console.log ('Server runnig')
})

