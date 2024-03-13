const express = require("express");
const router = express.Router();
const MoviePostModel = require("../models/MoviePost.js");
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const GetDataFromPy = async (data) => {
  try {
    const response = await fetch("http://localhost:5000/calculate", {
      method: "POST",
      body: JSON.stringify({ SearchID: data }),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      res.status(400).json({
        success: false,
        message: "Duplicate title found",
        duplicateTitle: true,
      });
      //   throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);

    return result;
  } catch (error) {
    console.error("Error Sending data:", error);
  }
};

const CheckDuplication = async (dataTittle) => {
  const existingMovie = await MoviePostModel.findOne({ Tittle: dataTittle });
  return !!existingMovie;
};
//Value from Search Input
router.post("/adminSearch", async (req, res) => {
  try {
    const { SearchID } = req.body;
    console.log(SearchID);
    const result = await GetDataFromPy(SearchID);

    const {
      name,
      genre,
      description,
      poster,
      rating,
      duration,
      director,
      datePublished,
    } = JSON.parse(result.IMBD$DATA);
    //rating value
    const { ratingValue } = rating;

    //duration time = Array
    const durationString = duration;
    const match = durationString.match(/PT(\d+H)?(\d+M)?/);
    const hours = match[1] || "0H";
    const minutes = match[2] || "0M";
    const durationArray = [hours, minutes];

    //datevalidation
    const dateArray = datePublished.split("-").map(Number);
    // console.log(dateArray);
    //director
    const directorName = director.map((val, i) => {
      return val.name;
    });
    // console.log(result);

    res.status(200).json({
      success: true,
      message: "Data received successfully",
      imbd$data: {
        name,
        genre,
        description,
        poster,
        ratingValue,
        durationArray,
        directorName,
        dateArray,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  } finally {
    console.log("Process Finished");
  }
});

//Post Movie To Database
router.post("/postmovie", async (req, res) => {
  const {
    Tittle,
    Genre,
    Description,
    Duration,
    Director,
    MoviePosters,
    Rating,
    ReleaseDate,
  } = req.body;

  try {
    if (await CheckDuplication(Tittle)) {
      throw new Error("Duplicate title found");
    }
    const data = new MoviePostModel({
      Tittle,
      Genre,
      Description,
      Duration,
      Director,
      MoviePosters,
      Rating,
      ReleaseDate,
    });
    const dataToSave = await data.save();
    // console.log(req.body);
    res.status(200).json(`Successfully Posted`);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
