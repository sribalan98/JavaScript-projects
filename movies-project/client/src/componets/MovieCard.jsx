import "../css/CardMovie.css";
const MovieCard = () => {
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
      <div className="card w-72 h-96">
        <div className="card-inner relative w-full h-full">
          <div className="card-front absolute w-full h-full backface-invisible object-cover transform rotate-y-0 flex items-center justify-center">
            <img src={obj.MoviePosters} alt={obj.Tittle} />
          </div>
          <div className="card-back absolute w-full h-full backface-invisible bg-nore-blue p-3">
            <div>
              <h1 className="text-white font-roboto">Movie : {obj.Tittle}</h1>
            </div>
            <div>
              <p className="text-[15px] text-white font-roboto">
                StoryPlot : {obj.Description}
              </p>
              <div className="mt-2">
                {obj.Genre.map((v, i) => (
                  <span
                    className="text-nore-blue bg-white rounded-lg px-2 mx-1"
                    key={i}
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2>Rating : {obj.Rating}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
