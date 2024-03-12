import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MovieCard from "../componets/MovieCard";

const AllMovies = () => {
  const [allMoviesData, setAllMoviesData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3080/movieland/allmovies"
        );
        const data = await response.json();
        console.log(data);
        setAllMoviesData(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-5 gap-2 justify-start items-center bg-yellow-400 w-9/12 px-10 py-5">
        {allMoviesData &&
          allMoviesData.map((value, i) => {
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
    </>
  );
};

export default AllMovies;

AllMovies.propTypes = {
  data: PropTypes.array,
};
