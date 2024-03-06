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

router.post("/postmovie", async (req, res) => {
  try {
    const data = new MoviePostModel({
      Tittle: req.body.Tittle,
      Genre: req.body.Genre,
      Discription: req.body.Discription,
      Language: req.body.Language,
      Director: req.body.Director,
      MoviePosters: req.body.MoviePosters,
      StreamingPlatforms: req.body.StreamingPlatforms,
    });
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
module.exports = router;
