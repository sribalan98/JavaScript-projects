// import NavBar from "../componets/NavBar";
import { Outlet } from "react-router-dom";
import NavBar from "../componets/NavBar";

const MainPage = () => {
  return (
    <>
      <div className="bg-Container ">
        <NavBar />
        <Outlet />
      </div>
    </>
  );
};

export default MainPage;
