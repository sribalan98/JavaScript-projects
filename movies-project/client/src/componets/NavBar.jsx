import movieland from "../assets/movieland.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const LiClassNames =
    "bg-hightlight-yellow text-dark-blue rounded-md px-4 py-2 font-semibold text-4";

  return (
    <>
      <nav className="w-full h-[5rem] bg-dark-blue flex items-center justify-between  top-0 ">
        <div
          id="Logo-Container"
          className="w-20 h-full ml-8 flex items-center gap-4 "
        >
          <img src={movieland} alt="MovieLand" />
          <h3 className="text-4xl font-semibold text-white font-protestRevolution ">
            MovieLand
          </h3>
        </div>
        <ul className="flex gap-6 mr-5 justify-center items-center">
          <Link className={LiClassNames} to="/">
            <li>Home</li>
          </Link>
          <Link className={LiClassNames} to="top-rated-movie">
            <li>Top Rated</li>
          </Link>
          <Link className={LiClassNames} to="">
            <li>Recent Release</li>
          </Link>
          <Link className={LiClassNames} to="">
            <li>Old Movies</li>
          </Link>
          <Link className={LiClassNames}>
            <li>❤️Support❤️</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
