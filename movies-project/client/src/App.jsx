import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";

import AdminPostPage from "./pages/AdminPostPage";
import TopRatedMovies from "./componets/TopRatedMovies";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<HomePage />} />
          <Route path="/topratedmovies" element={<TopRatedMovies />} />
        </Route>
        <Route path="/postmovie" element={<AdminPostPage />} />
      </Routes>
    </BrowserRouter>
  );
}
