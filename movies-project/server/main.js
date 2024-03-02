const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./routes/routes");
const ip = require("ip");
const app = express();
dotenv.config();

const { MONGOOSE, PORT } = process.env;

app.set("trust proxy", true);
app.use(
  "/movieland",
  cors({
    origin: "http://192.168.1.22:5173",
  }),
  router
);

app.listen(PORT, (req, res) => {
  const ServerIP = ip.address();
  console.log(`Server Running On ${PORT}`);
  console.log(`http://${ServerIP}:${PORT}/movieland/`);
});
