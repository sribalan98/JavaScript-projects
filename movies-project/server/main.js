const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const router = require("./routes/routes");
const ip = require("ip");
const app = express();
const ServerIP = ip.address();
dotenv.config();

const { MONGOOSE, PORT, DB_NAME } = process.env;
const DATABASE_URL = MONGOOSE;
app.set("trust proxy", true);

// app.use("/movieland", cors(), router);
app.use("/movieland", cors(), router);

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
