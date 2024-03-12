import movieland from "../assets/movieland.png";
import { BsFillSearchHeartFill } from "react-icons/bs";
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
          <li>
            <Link className={LiClassNames} to="/">
              Home
            </Link>
          </li>
          <li>
            <div className="flex justify-center items-center">
              <input
                type="text"
                className="h-8 outline-none px-2 font-semibold"
              />
              <button className="bg-hightlight-yellow text-dark-blue rounded-tr-lg rounded-br-lg px-4 py-2  ">
                <BsFillSearchHeartFill />
              </button>
            </div>
          </li>
          <li>
            <Link className={LiClassNames}>Support</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
