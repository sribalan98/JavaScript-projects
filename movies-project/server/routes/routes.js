const express = require("express");
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/allMovies", (req, res) => {
  res.send({ ondipuli: "Pro in Valorant" });
});

router.post("/postmovie", (req, res) => {
  const data = {
    Tittle: req.body.Tittle,
    ReleaseDate: req.body.ReleaseDate,
    Duration: req.body.Duration,
    Genre: req.body.Genre,
    PlotSummary: req.body.PlotSummary,
    discription: req.body.discription,
    Language: req.body.Language,
    CountryofOrigin: req.body.CountryofOrigin,
    StreamingPlatforms: req.body.StreamingPlatforms,
    Director: req.body.Director,
    MoviePosters: req.body.MoviePosters,
  };
  res.send(JSON.stringify(data));
});
module.exports = router;
// {
//   Tittle: ,
//   ReleaseDate: ,
//   Duration:,
//   Genre: ,
//   PlotSummary: ,
//   discription:,
//   Language: ,
//   CountryofOrigin: ,
//   StreamingPlatforms: ,
//   Director:,
//   MoviePosters: ,
// }
