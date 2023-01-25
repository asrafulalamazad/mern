const express = require('express');
const helloController= require('../controllers/helloController');
const StudentsController= require('../controllers/StudentsController');
const JWTpractice= require('../controllers/JWTpractice');

const router = express.Router();


router.get('/welcome',helloController.hello);
//router.get("/hello", helloCcontroller.Hello_get)

//mongoose start
    //create data
router.post("/insertStudent", StudentsController.insertStudent);
    //read data
router.get("/readStudent", StudentsController.readStudent);
    //read data
router.post("/updateStudent/:id", StudentsController.updateStudent);
    //delete data
router.post("/deleteStudent/:id", StudentsController.deleteStudent);

//mongoose end


//JWT start
// create Token
router.post("/createToken", JWTpractice.createToken);

//Decode Token
router.post("/docodeToken", JWTpractice.decodeToken);

//JWT end



module.exports= router;
