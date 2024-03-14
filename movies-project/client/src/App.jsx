import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import AdminPostPage from "./pages/AdminPostPage";
import TopRatedPage from "./pages/TopRatedPage";
import SupportPage from "./pages/SupportPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<HomePage />} />
          <Route path="/top-rated-movie" element={<TopRatedPage />} />
        </Route>
        <Route path="/support-page" element={<SupportPage />} />
        <Route path="/postmovie" element={<AdminPostPage />} />
      </Routes>
    </BrowserRouter>
  );
}
