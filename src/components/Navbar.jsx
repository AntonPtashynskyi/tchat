import React from "react";
import "../style/base.style.scss";

function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">T-chat</span>
      <div className="user">
        <img src="" alt="" />
        <span>Anton</span>
        <button>logout</button>
      </div>
    </div>
  );
}

export default Navbar;
