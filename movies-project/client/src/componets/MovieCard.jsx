const MovieCard = () => {
  /**
   * Paste one or more documents here
   */
  const obj = {
    Tittle: "Asuran",
    Genre: ["Action", "Drama"],
    Description:
      "The teenage son of a farmer from an underprivileged caste kills a rich, upper caste landlord. How the pacifist farmer saves his hot-blooded son is the rest of the story.",
    Duration: ["2H", "21M"],
    Director: ["Vetrimaaran"],
    MoviePosters:
      "https://m.media-amazon.com/images/M/MV5BNjU1OTliOWYtYzg3Yi00ODVmLWIzMjctZGJmZjRhZjY5OTA2XkEyXkFqcGdeQXVyMTAwMDE4MjA3._V1_.jpg",
    Rating: 8.4,
    ReleaseDate: {
      year: 2019,
      month: 10,
      date: 4,
    },
    __v: 0,
  };
  return (
    <>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src={obj.MoviePosters} className="object-cover" />
          </div>
          <div className="card-back">
            <div>
              <h1>{obj.Tittle}</h1>
            </div>
            <div>
              <p className="text-[15px]">{obj.Description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
