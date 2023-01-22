const express = require('express');
const helloController= require('../controllers/helloController');
const StudentsController= require('../controllers/StudentsController');

const router = express.Router();


router.get('/welcome',helloController.hello);
//router.get("/hello", helloCcontroller.Hello_get)

//mongoose
    //create data
router.post("/insertStudent", StudentsController.insertStudent);
    //read data
router.get("/readStudent", StudentsController.readStudent);
    //read data
router.post("/updateStudent/:id", StudentsController.updateStudent);

//mongoose

module.exports= router;
