const express= require("express");
const helloCcontroller= require("../controllers/helloController.js")
const studentControllers= require('../controllers/studentControllers')


const router = express.Router();

//get routing

router.get("/hello", helloCcontroller.Hello_get)
//post routing
router.post("/hello", helloCcontroller.Hello_post)


//mongoose start

router.get("/insertStudent", studentControllers.insertStudent)

//mongoose end






module.exports = router;