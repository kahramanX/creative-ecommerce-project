import Components from "Components";
import HomePage from "pages/HomePage/index";
import SearchPage from "pages/SearchPage/index";
import FavoritesPage from "pages/FavoritesPage/index";
import UserPage from "pages/UserPage";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute: React.FC<any> = ({ children }) => {
  const { isAuth } = useSelector((state: any) => state.authSlice);

  return isAuth ? children : <Navigate to="/login" />;
};

const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route
        path="/user"
        element={
          <PrivateRoute>
            <UserPage />
          </PrivateRoute>
        }
      />
      <Route path="/components" element={<Components />} />
    </Routes>
  );
};

export default Routers;
