import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const TopRatedMovies = () => {
  const [TopRatedData, setTopRatedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3080/movieland/top-rated-movies"
        );
        const data = await response.json();
        console.log(data);
        setTopRatedData(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="w-9/12 min-h-screen px-10 py-5 bg-yellow-400 ">
        <h1 className="mb-5 font-roboto font-bold text-3xl text-nore-blue">
          Top Rated Movies
        </h1>
        <div className="grid grid-cols-5 gap-2 justify-start items-center">
          {TopRatedData &&
            TopRatedData.map((value, i) => {
              return (
                <MovieCard
                  key={i}
                  poster={value.MoviePosters}
                  tittle={value.Tittle}
                  description={value.Description}
                  genre={value.Genre}
                  rating={value.Rating}
                  year={value.ReleaseDate.year}
                  month={value.ReleaseDate.month}
                  date={value.ReleaseDate.date}
                  director={value.Director}
                  duration={value.Duration}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default TopRatedMovies;
