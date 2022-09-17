import React from "react";
import "../style/base.style.scss";
import Add from "../media/img/upoload.png";

export const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">T-chat</span>
        <span className="pageTitle">Register</span>
        <form className="loginForm">
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <label htmlFor="file">
            <img src={Add} alt="upload" className="uploadImg" />
            <span>add avatar</span>
          </label>
          <input type="file" id="file" style={{ display: "none" }} />
          <button type="submit" onClick={(e) => e.preventDefault()}>
            Sign-up
          </button>
        </form>
        <p>
          You do have an account?{" "}
          <span>
            <a href="./Login.jsx">Log In</a>
          </span>
        </p>
      </div>
    </div>
  );
};
