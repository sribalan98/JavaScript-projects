// import NavBar from "../componets/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../componets/NavBar";
import { useState } from "react";
import classNames from "classnames";

const MainPage = () => {
  const LiClassNames =
    "bg-blue-600 text-white rounded-md px-4 py-2 font-semibold text-4";
  const [isLoggedIn, setLoggedIn] = useState(false);
  const loginLiClassName = classNames({
    [LiClassNames]: true,
    "bg-red-600": isLoggedIn,
    "text-white": isLoggedIn,
  });
  const location = useLocation();
  const handleLoginClick = () => {
    setLoggedIn(!isLoggedIn);

    const currentURL = location.pathname;
    console.log("Current URL:", currentURL);
  };
  return (
    <>
      <NavBar
        HLC={handleLoginClick}
        NC={LiClassNames}
        LC={loginLiClassName}
        ISV={isLoggedIn}
      />
      <Outlet />
    </>
  );
};

export default MainPage;
