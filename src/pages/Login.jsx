import React from "react";
import "./pageStyle.scss";

export const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">T-chat</span>
        <span className="pageTitle">Login</span>
        <form className="loginForm">
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button type="submit" onClick={(e) => e.preventDefault()}>
            Log in
          </button>
        </form>
        <p>
          You don't have an account? <span>Register</span>
        </p>
      </div>
    </div>
  );
};
