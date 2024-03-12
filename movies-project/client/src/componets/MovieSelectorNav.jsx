import { Link } from "react-router-dom";

const MovieSelectorNav = () => {
  return (
    <>
      <div className="w-9/12 h-20 bg-black ">
        <ul className="flex">
          <Link className="text-white">
            <li>Recent Release</li>
          </Link>

          <Link className="text-white" to="/topratedmovies">
            <li>Top Rated</li>
          </Link>

          <Link className="text-white">
            <li>Search</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default MovieSelectorNav;
