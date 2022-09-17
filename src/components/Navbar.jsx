import React from "react";
import "../style/base.style.scss";

function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">T-chat</span>
      <div className="user">
        <img src="https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?k=20&m=1007763808&s=612x612&w=0&h=q4qlV-99EK1VHePL1-Xon4gpdpK7kz3631XK4Hgr1ls=" alt="" />
        <span>Anton</span>
        <button>logout</button>
        
      </div>
    </div>
  );
}

export default Navbar;
