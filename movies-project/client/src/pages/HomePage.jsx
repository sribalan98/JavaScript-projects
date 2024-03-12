/* eslint-disable no-constant-condition */

import AllMovies from "../componets/AllMovies";
import MovieSelectorNav from "../componets/MovieSelectorNav";

const HomePage = () => {
  return (
    <frameElement className="flex flex-col items-center bg-Container">
      <MovieSelectorNav />
      <AllMovies />
    </frameElement>
  );
};

export default HomePage;
