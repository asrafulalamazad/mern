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
//download
app.get('/download', function(req, res){

    res.download('./uploads/nature.jpg')

})

//redirect from

app.get('/feni', function(req, res){

   res.redirect("/dhaka/")
 

})
//redirect to

app.get('/dhaka', function(req, res){

   res.send("dhaka, Bangladesh")
 
 })


 app.get("/header",function(req, res){

    res.append("f_name","Asraful")
    res.append("l_name","alam")
    res.append("dist","feni")
    res.send("header request");
    res.status("201")

 })

 app.get("/cookie",function(req, res){

    res.cookie("name","Asraful")
    res.cookie("age","65")
    res.cookie("city","dhaka")
  
    res.status("201")
    res.end("set cookie")

 })


 app.get("/cookie_reset",function(req, res){

    res.clearCookie('name');
    res.clearCookie('age');
    res.end("Clear")

 })






//server port
app.listen(1992, function (){
    console.log ('Server runnig')
})

