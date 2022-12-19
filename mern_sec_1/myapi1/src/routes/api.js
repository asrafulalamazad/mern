const express= require("express");
const helloCcontroller= require("../controllers/helloController.js")


const router = express.Router();

//get routing

router.get("/hello", helloCcontroller.Hello)


module.exports= router;