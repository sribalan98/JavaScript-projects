// import NavBar from "../componets/NavBar";
import { Outlet } from "react-router-dom";
import NavBar from "../componets/NavBar";

const MainPage = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default MainPage;
