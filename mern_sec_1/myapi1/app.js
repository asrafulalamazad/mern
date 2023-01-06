const express= require("express");
const router = require("./src/routes/api");


const app = new express();

//security Middleware Import start
const rateLimit = require('express-rate-limit');
const helmet=  require('helmet');
const mongoSanitize= require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp= require('hpp');
const cors= require('cors');
const { default: mongoose } = require("mongoose");
//security Middleware Import end

//security Middleware Implement start

app.use(cors());
app.use (helmet());
app.use (mongoSanitize());
app.use(xss());
app.use(hpp());

// request rate limt start

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minites
    max : 100, //// Limit each IP to 100 requests per `window` (here, per 15 minutes)
    });

    //mpm documentation
    // const limiter = rateLimit({
    //     windowMs: 15 * 60 * 1000, // 15 minutes
    //     max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    //     standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    //     legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    // })
    
    // // Apply the rate limiting middleware to all requests
    
    
    app.use(limiter)



// request rate limt end


//security Middleware Implement start


// MongoDB Database Connection
    // let URI = "mongodb+srv://cluster0.kxn7sfi.mongodb.net/school";
    // let OPTION = {user:"asrafuldoc", password: "Azad20121987"};

let URI = "mongodb://127.0.0.1:27017/School";
let OPTION = {user:'', password: ''};

mongoose.connect(URI
    // , OPTION, (error)=>{
    // console.log("Database Connected");
    // console.log(error)}
    );


//MongoDB Database end



app.use("/api/v1",router)


//undefined router start
app.use("*", (req,res)=>{
    res.status(404).json({"status": "Failed", "data":"Not found"})
})
//undefined router end



module.exports=app