import React from "react";
import { Helmet } from "react-helmet-async";
import "assets/styles/components/loginPage/loginPage.scss";
import LayeredInput from "components/shared/LayeredInput";
import LayeredButton from "components/shared/LayeredButton";
import { Link } from "react-router-dom";

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
        <div className="page-content">
          <form>
            <LayeredInput inputType={"text"} placeholderText={"E-mail"} />
            <br />
            <LayeredInput inputType={"text"} placeholderText={"Password"} />
            <br />
            <LayeredButton text="Login" textSize="md" />
          </form>
          <br />
          <div className="short-link">
            Don't have an account? <Link to={"/register"}>Register</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
