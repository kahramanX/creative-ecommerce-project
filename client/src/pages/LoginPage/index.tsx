import React from "react";
import { Helmet } from "react-helmet-async";
import "assets/styles/components/loginPage/loginPage.scss";

const LoginPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Login🔑 | Mr.SCRUBBER</title>
      </Helmet>
      <div className="loginpage">
        <div className="page-title">
          <h1>Login 🔑</h1>
        </div>
        <div className="page-content"></div>
      </div>
    </>
  );
};

export default LoginPage;
