const express = require("express");
const router = express.Router();

router.get("/check", (req, res) => {
  res.send("Checked Working");
});
module.exports = router;