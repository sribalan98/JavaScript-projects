import { Link } from "react-router-dom";

const MovieSelectorNav = () => {
  return (
    <>
      <div className="w-9/12 h-auto py-2 bg-black ">
        <ul className="h-full flex justify-evenly items-center">
          <Link className="text-nore-blue bg-orange-500 font-bold px-4 py-2 rounded-xl font-roboto text-lg hover:bg-slate-400">
            <li>Recent Release</li>
          </Link>

          <Link
            className="text-nore-blue bg-orange-500 font-bold px-4 py-2 rounded-xl font-roboto text-lg hover:bg-slate-400"
            to="/topratedmovies"
          >
            <li>Top Rated</li>
          </Link>

          <Link className="text-nore-blue bg-orange-500 font-bold px-4 py-2 rounded-xl font-roboto text-lg hover:bg-slate-400">
            <li>Search</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default MovieSelectorNav;
