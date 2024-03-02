import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AdminPostPage from "./pages/AdminPostPage";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route path="postmovie" element={<AdminPostPage />} />
      </Routes>
    </BrowserRouter>
  );
}
