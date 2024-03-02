import movieland from "../assets/movieland.png";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const NavBar = (props) => {
  const { NC, LC, HLC, ISV } = props;
  return (
    <>
      <nav className="w-full h-[5rem] bg-blue-400 flex items-center justify-between sticky top-0">
        <div
          id="Logo-Container"
          className="w-20 h-full ml-8 flex items-center gap-4"
        >
          <img src={movieland} alt="MovieLand" />
          <h3 className="text-4xl font-semibold text-white font-protestRevolution ">
            MovieLand
          </h3>
        </div>
        <ul className="flex gap-6 mr-5">
          <li>
            <Link className={NC} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={NC}>Blogs</Link>
          </li>
          <li>
            <Link className={NC}>Contact</Link>
          </li>
          <li>
            <Link className={LC} to="/login" onClick={HLC}>
              {ISV ? "Logout" : "Login"}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
NavBar.propTypes = {
  NC: PropTypes.string,
  LC: PropTypes.string,
  HLC: PropTypes.func,
  ISV: PropTypes.bool,
};
export default NavBar;
