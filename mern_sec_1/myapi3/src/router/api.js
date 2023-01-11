const express = require('express')
const helloController= require('../controllers/helloController')

const router = express.Router();


router.get('/welcome',helloController.hello)
//router.get("/hello", helloCcontroller.Hello_get)



module.exports= router;
