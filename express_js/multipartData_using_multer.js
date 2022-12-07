var express = require('express');

var multer = require('multer');

var multer = multer();


app = express();
app.use(multer.array())
app.use(express.static('public'));




app.post('/', function(req, res){

    var jsonData=  req.body;
    var jsonString= JSON.stringify(jsonData);
    res.send(jsonString)

    

})

app.listen(80, function(){
    console.log('server up')
})