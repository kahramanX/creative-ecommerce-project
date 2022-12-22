import Components from "Components";
import HomePage from "pages/HomePage/index";
import SearchPage from "pages/SearchPage/index";
import { Routes, Route } from "react-router-dom";

const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/components" element={<Components />} />
    </Routes>
  );
};

export default Routers;
