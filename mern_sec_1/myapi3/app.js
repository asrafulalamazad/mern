const express = require('express');
const router = require('./src/router/api')
const app= new express();
const mongoose=require('mongoose')



//sec_middleware import

const rateLimit= require("express-rate-limit");
const helmet = require('helmet');
const mongoSanitize= require('express-mongo-sanitize');
const xss= require('xss-clean');
const hpp= require('hpp');
const cors = require('cors');
const bodyParser =require('body-parser');



//sec_middleware implements
app.use(cors());
app.use(hpp());
app.use(mongoSanitize());
app.use(xss());
app.use(helmet());
app.use(bodyParser.json());

// request rate limit start

const limiter = rateLimit(
    {
        windowMs: 15*60*1000, //15 min
        max: 100 // 100 request per minite each ip address
    }
)

app.use(limiter)
// request rate limit end


//database Conncection start


// getting-started.js


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/School');
  
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}



    // let URI= "mongodb://localhost:27017/School";
    // let OPTION = {user: "", pass: "" }


    

    // mongoose.connect(URI);

    // // mongoose.connect(URI,OPTION, (error)=>{
    // //     console.log('connected');
    // //     console.log(error);


    // // })

//database Conncection end



// router start

app.use('/api/v3',router);
app.use('*', (req, res)=>{
    res.status(404).send('request not found');
   

})

module.exports= app;

