var express = require('express');
var multer = require('multer');
var multer = multer();


var app = express();



var storage = multer.diskStorage(   {
                destination : function(req, file, callBack){
                callBack(null, './uploads');
            },
            

                filename: function(req, file, callBack){
                    callBack(null, file.originalname);

            }}
    
)

var upload = multer({storage:storage}).single ('myfile');


app.post('/', function(req, res){

   upload=(req,res, function(error){
    if(error){
        return res.end ('failed')
    } else{
        res.end('Success')
    }
   })

    

})

app.listen(80, function(){
    console.log('server up')
})