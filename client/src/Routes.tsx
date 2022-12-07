import Components from "Components";
import HomePage from "pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";

const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/components" element={<Components />} />
    </Routes>
  );
};

export default Routers;
