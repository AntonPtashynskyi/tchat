import React from "react";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "../style/base.style.scss";
import Add from "../media/img/upoload.png";

export const Register = () => {
  const [error, setError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">T-chat</span>
        <span className="pageTitle">Register</span>
        <form className="loginForm" onSubmit={handleSubmit}>
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
          {error && <p>Something went wrong!</p>}
        </form>
        <p>
          You do have an account?{" "}
          <span>
            <a href="./Login.jsx`">Log In</a>
          </span>
        </p>
      </div>
    </div>
  );
};
