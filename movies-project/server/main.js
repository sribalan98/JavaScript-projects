const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const ip = require("ip");
const app = express();
const ServerIP = ip.address();

//Router Backend Files Path
const adminRouter = require("./routes/adminRouter");
const movieRouter = require("./routes/movieRouter");
const checkRouter = require("./routes/checkRouter");

//mongoose
dotenv.config();
const { MONGOOSE, PORT, DB_NAME } = process.env;
const DATABASE_URL = MONGOOSE;

app.set("trust proxy", true);
app.use(express.json()); //add new
app.use(express.urlencoded({ extended: true })); //add new

// app.use("/movieland", cors(), router);
app.use(cors());
app.use("/movieland", adminRouter);
app.use("/movieland", movieRouter);
app.use("/movieland", checkRouter);

mongoose
  .connect(DATABASE_URL + DB_NAME)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(`Error`);
    console.log(error.message);
  });

app.listen(PORT, () => {
  console.log(`Server Running On ${PORT}`);
  console.log(`http://${ServerIP}:${PORT}/movieland/`);
});
