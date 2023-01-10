import Components from "Components";
import HomePage from "pages/HomePage/index";
import SearchPage from "pages/SearchPage/index";
import FavoritesPage from "pages/FavoritesPage/index";
import UserPage from "pages/UserPage/index";
import PrivateRoute from "components/PrivateRoute";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "pages/RegisterPage/index";
import LoginPage from "pages/LoginPage/index";

const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route
        path="/favorites"
        element={
          <PrivateRoute>
            <FavoritesPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/user"
        element={
          <PrivateRoute>
            <UserPage />
          </PrivateRoute>
        }
      />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/components" element={<Components />} />
    </Routes>
  );
};

export default Routers;
