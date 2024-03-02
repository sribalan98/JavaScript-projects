require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const routes = require("./routes/routes.js");
const DATABASE_URL = `Mongo Db Api selected`;

const app = express();
app.use(express.json());

mongoose
  .connect(DATABASE_URL)
  .then(() => {
    console.log("Connected");
  })
  .catch((error) => {
    console.log(`Error`);
    console.log(error.message);
  });

app.use("/api", routes);

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
