const express = require("express");

const User = require("../models/User.js");

const router = express.Router();

const {createUser} =require("../controller/register.js")
const {getUser}=require("../controller/login.js")

router.post("/register", createUser);
router.post("/login", getUser);


module.exports = router;
