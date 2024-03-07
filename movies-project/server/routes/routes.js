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

router.post("/postmovie", async (req, res) => {
  const {
    Tittle,
    Genre,
    Discription,
    StreamingPlatforms,
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
      StreamingPlatforms,
      Director,
      MoviePosters,
    });
    const dataToSave = await data.save();
    res.status(201).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
module.exports = router;
