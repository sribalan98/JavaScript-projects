const express = require("express");
const router = express.Router();
const MoviePostModel = require("../models/MoviePost.js");
const shuffleArray = require("../functions/shuffle.js");
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
//All Movies Router
router.get("/allMovies", async (req, res) => {
  try {
    const data = await MoviePostModel.find({});

    res.status(200).json(shuffleArray(data));
    // console.log(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Top Rated Movies Router
router.get("/top-rated-movies", async (req, res) => {
  try {
    const data = await MoviePostModel.find({});
    const FilterData = data.filter((value) => value.Rating >= 8.5);
    res.status(200).json(shuffleArray(FilterData));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
