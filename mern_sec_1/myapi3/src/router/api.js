const express = require('express');
const helloController= require('../controllers/helloController');
const StudentsController= require('../controllers/StudentsController');

const tokenIssueController = require("../controllers/tokenIssueController")

const JWTpractice= require('../controllers/JWTpractice');
const tokenVarifyController =require("../middleware/tokenVarifyMiddleware")

const router = express.Router();


router.get('/welcome',helloController.hello);
//router.get("/hello", helloCcontroller.Hello_get)


// Apply Jwt 
//mongoose start
    //create token
router.post("/createToken",tokenIssueController.tokenIssue );

    //create data
router.post("/insertStudent", tokenVarifyController,StudentsController.insertStudent);
    //read data
router.get("/readStudent",tokenVarifyController, StudentsController.readStudent);
    //read data
router.post("/updateStudent/:id",tokenVarifyController, StudentsController.updateStudent);
    //delete data
router.post("/deleteStudent/:id", tokenVarifyController, StudentsController.deleteStudent);

//mongoose end


//JWT start Practise
// create Token
router.post("/createToken", JWTpractice.createToken);

//Decode Token
router.post("/docodeToken", JWTpractice.decodeToken);

//JWT end



module.exports= router;
