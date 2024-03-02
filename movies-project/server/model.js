const mongoose = require("mongoose");

const MovieDetailsSchema = new mongoose.Schema({
  Title: {
    required: true,
    type: String,
  },
  ReleaseDate: {
    required: true,
    type: String,
  },
  Duration: {
    required: true,
    type: Number,
  },
  Genre: {
    required: true,
    type: String,
  },
  PlotSummary: {
    required: true,
    type: String,
  },
  Discription: {
    required: true,
    type: String,
  },
  Language: {
    required: true,
    type: String,
  },
  CountryofOrigin: {
    required: true,
    type: String,
  },
  NativeLanguage: {
    required: true,
    type: String,
  },
  StreamingPlatforms: {
    required: true,
    type: Array,
  },
  Director: {
    required: true,
    type: String,
  },
  MoviePosters: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("MovieDetails", MovieDetailsSchema);
