const express = require('express');
const router = require('./src/router/api')
const app= new express();



//sec_middleware import

const rateLimit= require("express-rate-limit");
const helmet = require('helmet');
const mongoSanitize= require('express-mongo-sanitize');
const xss= require('xss-clean');
const hpp= require('hpp');
const cors = require('cors');


//sec_middleware implements
app.use(cors());
app.use(hpp());
app.use(mongoSanitize());
app.use(xss());
app.use(helmet());

// request rate limit start

const limiter = rateLimit(
    {
        windowMs: 15*60*1000, //15 min
        max: 100 // 100 request per minite each ip address
    }
)

app.use(limiter)
// request rate limit end


// router start

app.use('/api/v3',router);
app.use('*', (req, res)=>{
    res.status(404).send('request not found');
   

})

module.exports= app;

