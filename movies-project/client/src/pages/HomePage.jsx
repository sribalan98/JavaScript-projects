/* eslint-disable no-constant-condition */

import AllMovies from "../componets/AllMovies";
import MovieSelectorNav from "../componets/MovieSelectorNav";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center bg-Container">
      <MovieSelectorNav />
      <AllMovies />
    </div>
  );
};

export default HomePage;
