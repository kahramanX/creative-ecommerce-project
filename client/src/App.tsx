import Footer from "components/layouts/Footer";
import Header from "components/layouts/Header";
import React from "react";
import Routers from "Routes";
import { HelmetProvider } from "react-helmet-async";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <HelmetProvider>
        <Routers />
      </HelmetProvider>
      <Footer />
    </div>
  );
};

export default App;
