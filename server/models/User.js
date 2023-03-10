/* The above code is creating a schema for the user model. */
const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require,
    },
    email: {
      type: String,
      require,
    },
    
    
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userSchema);
