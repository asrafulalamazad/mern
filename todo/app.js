
// Basic lib import
const express= require("express");
const router = require('./src/routes/api');
const app = new express();
const bodyparser = require('body-parser');
//const { rateLimit } = require("express-rate-limit");


//Security midleware improt
const rateLimit= require('express-rate-limit');
const helmet= require('helmet');
const mongosanitize= require('express-mongo-sanitize');
const xssclean= require('xss-clean');
const hpp= require('hpp');
const cors= require('cors');

// Database Package 
const mongoose = require('mongoose');

//Security midleware implementation

app.use(cors());
app.use(helmet());
app.use(mongosanitize());
app.use(xssclean());
app.use(hpp());

// body-parser implementation
app.use(bodyparser.json());

// request rate limit
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})
app.use(limiter);



//mongo db Conncetion
mongoose.connect("mongodb://127.0.0.1:27017/Todo",{
	useNewUrlParser:true,useUnifiedtopology:true
},(err)=>{
	if(err){
		console.log(err)
	}
	else{
		console.log("Database Connected @5000 port")
	}

})


//Router Implement
//app.use("/api/v1", router);
app.use('/api/v1',router);
//undifiend router

app.use("*", (req,res)=>{
    res.status(404).json({'status':'Failed', 'data':'404 Page Not Found'})

});

module.exports= app;