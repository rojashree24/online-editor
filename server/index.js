const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const userRoute = require("./routes/user.js");

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/api/user", userRoute);

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () => {
      console.log(" Connected to db & Listening to the port", process.env.PORT);
    })
  )
  .catch((error) => console.log(`${error} did not connect`));
