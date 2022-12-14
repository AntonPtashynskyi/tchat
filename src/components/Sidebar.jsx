import React from "react";
import "../style/base.style.scss";
import Navbar from "./Navbar";
import Search from "./Search";

function Sidebar() {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
    </div>
  );
}

export default Sidebar;
