const express = require("express");
const MoviePostModel = require("../models/MoviePost.js");
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/allMovies", async (req, res) => {
  try {
    const data = await MoviePostModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get("/check", (req, res) => {
  res.send("Checked Working");
});
const GetDataFromPy = async (data) => {
  try {
    const response = await fetch("http://localhost:5000/calculate", {
      method: "POST",
      body: JSON.stringify({ value1: data }), // Convert data to JSON string
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error Sending data:", error);
  }
};

router.post("/adminSearch", async (req, res) => {
  try {
    const sample = req.body;
    console.log(sample);
    const result = await GetDataFromPy(sample.name);
    res.status(200).json({
      success: true,
      message: "Data received successfully",
      function: result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  } finally {
    console.log("Process Finished");
  }
});

router.post("/postmovie", async (req, res) => {
  const {
    Tittle,
    Genre,
    Discription,
    // StreamingPlatforms,
    Director,
    Language,
    MoviePosters,
  } = req.body;
  try {
    const data = new MoviePostModel({
      Tittle,
      Genre,
      Discription,
      Language,
      // StreamingPlatforms,
      Director,
      MoviePosters,
    });
    const dataToSave = await data.save();
    res.status(200).json(`Successfully Posted`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
module.exports = router;
