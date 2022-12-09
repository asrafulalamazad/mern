var express = require('express');

var bodyparser = require('body-parser');


 app = express();

app.use(bodyparser.json());

app.post('/', function(req, res){

    let jsonData= req.body;
    //let jsonString= JSON.stringify(jsonData);
    let name= jsonData.name;
    let reg= jsonData.reg;
   // res.send(jsonString);
//    res.send('Name : ${name} and Roll : ${reg}')
   res.send('Name : '+ name+ ' and Roll : '+ reg);
    

})

app.listen(80, function(){
    console.log('server up')
})