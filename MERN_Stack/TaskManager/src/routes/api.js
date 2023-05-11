const express = require("express");
const UserController= require('../controller/UserController');
const TaskController= require('../controller/TaskController');
const AuthVerifyMiddleware= require('../middleware/AuthVerifyMiddleware');

const router = express.Router();
//api router end point

//User
router.post("/registration", UserController.registration);
router.post("/login", UserController.login);
router.post("/profileUpdate",AuthVerifyMiddleware , UserController.profileUpdate);



//task
router.post("/createTask", AuthVerifyMiddleware,TaskController.createTask);
router.get("/deleteTask/:id", AuthVerifyMiddleware,TaskController.deleteTask);
router.get("/updateTaskStatus/:id/:status", AuthVerifyMiddleware,TaskController.updateTaskStatus);

module.exports = router;

