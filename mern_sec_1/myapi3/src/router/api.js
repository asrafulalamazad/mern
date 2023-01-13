const express = require('express');
const helloController= require('../controllers/helloController');
const StudentsController= require('../controllers/StudentsController');

const router = express.Router();


router.get('/welcome',helloController.hello);
//router.get("/hello", helloCcontroller.Hello_get)

//mongoose

router.post("/insertStudent", StudentsController.insertStudent);

//mongoose

module.exports= router;
