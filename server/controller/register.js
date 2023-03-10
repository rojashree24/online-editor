// import jwt  from "jsonwebtoken";
// import bcrypt from 'bcryptjs'

const User = require("../models/User.js");

const createUser = async (req, res) => {
  const { fname, email} = req.body;

  

  const newUser = new User({ fname, email});

  try {
    newUser.save();
    res.status(200).json(newUser); //visible in network
  } catch (error) {
    return res.status(400).json({ message: error });
  }


}

module.exports = { createUser };
