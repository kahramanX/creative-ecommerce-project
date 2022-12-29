import LayeredButton from "components/shared/LayeredButton";
import LayeredInput from "components/shared/LayeredInput";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const RegisterPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Register🔓🔑 | Mr.SCRUBBER</title>
      </Helmet>
      <div className="loginpage">
        <div className="page-title">
          <h1>Register 🔓🔑</h1>
        </div>
        <div className="page-content">
          <form>
            <LayeredInput inputType={"text"} placeholderText={"Firstname"} />
            <br />
            <LayeredInput inputType={"text"} placeholderText={"Lastname"} />
            <br />
            <LayeredInput inputType={"text"} placeholderText={"E-mail"} />
            <br />
            <LayeredInput inputType={"text"} placeholderText={"Password"} />
            <br />
            <LayeredButton text="Register" textSize="md" />
          </form>
          <br />
          <div className="short-link">
            Aldredy have an account? <Link to={"/login"}>Login</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
