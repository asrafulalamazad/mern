const express= require("express");
const helloCcontroller= require("../controllers/helloController.js")


const router = express.Router();

//get routing

router.get("/hello", helloCcontroller.Hello_get)
//post routing
router.post("/hello", helloCcontroller.Hello_post)


//undefined router


module.exports= router;