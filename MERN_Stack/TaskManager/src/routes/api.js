const express = require("express");
const UserController= require('../controller/UserController');
const TaskController= require('../controller/TaskController');

const router = express.Router();
//api router end point

//User
router.post("/registration", UserController.registration);
router.post("/login", UserController.login);
router.post("/profileUpdate", UserController.ProfileUpdate);



//task
router.post("/addTask", TaskController.addTask);

module.exports = router;

