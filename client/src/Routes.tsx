import Components from "Components";
import HomePage from "pages/HomePage/index";
import SearchPage from "pages/SearchPage/index";
import FavoritesPage from "pages/FavoritesPage/index";
import UserPage from "pages/UserPage";
import { Routes, Route } from "react-router-dom";

const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/components" element={<Components />} />
    </Routes>
  );
};

export default Routers;
