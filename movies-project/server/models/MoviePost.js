const mongoose = require("mongoose");

const MoviePostSchema = new mongoose.Schema({
  Tittle: {
    required: true,
    type: String,
  },
  Genre: {
    required: true,
    type: Array,
  },

  Discription: {
    required: true,
    type: String,
  },
  Language: {
    required: true,
    type: Array,
  },
  Director: {
    required: true,
    type: Array,
  },
  MoviePosters: {
    required: true,
    type: String,
  },
  // StreamingPlatforms: {
  //   required: true,
  //   type: Array,
  // },
});

module.exports = mongoose.model("MoviePost", MoviePostSchema);
