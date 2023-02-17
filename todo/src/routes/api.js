const express= require("express");

const ProfileController = require("../controllers/ProfileController")

const router= express.Router();

router.post("/registration",ProfileControlle.CreateProfile)

module.exports= router;