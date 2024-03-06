// import NavBar from "../componets/NavBar";
import { Outlet } from "react-router-dom";
import NavBar from "../componets/NavBar";

const MainPage = () => {
  const LiClassNames =
    "bg-hightlight-yellow text-dark-blue rounded-md px-4 py-2 font-semibold text-4";

  return (
    <>
      <NavBar NC={LiClassNames} />
      <Outlet />
    </>
  );
};

export default MainPage;
