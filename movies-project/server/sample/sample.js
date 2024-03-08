const request = require("request");

const dataToSend = {
  value1: "tt15654328",
};

request.post(
  {
    url: "http://localhost:5000/calculate", // Replace with your Python server URL
    json: dataToSend,
  },
  (error, response, body) => {
    if (error) {
      console.error("Error sending data:", error);
    } else {
      const IMBD$PY$DATA = JSON.parse(body.result);
      const { name, genre, description, poster, review, rating, duration } =
        IMBD$PY$DATA;
      console.log(duration);
      const sample = {
        Tittle: name,
        Genre: genre,
        Description: description,
        MoviePosters: poster,
        ReleaseDate: review.dateCreated,
        Rating: rating.ratingValue,
        Duration: duration,
      };
    }
  }
);
