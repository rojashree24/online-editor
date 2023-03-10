const User=require("../models/User.js")

const getUser=async(req,res)=>{
     const { email} = req.body;
    try {
      const existinguser = await User.findOne({ email });
      if (!existinguser) {
        return res.status(404).json({ message: "User don't Exist." });
      }

      res.status(200).json({existinguser});
    } catch (error) {
      res.status(500).json("Something went worng...");
    
}
}

module.exports = { getUser };