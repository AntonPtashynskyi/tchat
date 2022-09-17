import React from "react";

function Search() {
  return <div className="search">
    <input type="text" placeholder="find user" className="input"/>
    <ul className="userList">
      <li className="user">
        <img src="https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?k=20&m=1007763808&s=612x612&w=0&h=q4qlV-99EK1VHePL1-Xon4gpdpK7kz3631XK4Hgr1ls=" alt="" className="user__img"/>
        <div className="user__container">
          <h3 className="user__name">Anthony</h3>
          <p className="user__last-message">last message</p>
        </div>
      </li>
      <li className="user">
        <img src="https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?k=20&m=1007763808&s=612x612&w=0&h=q4qlV-99EK1VHePL1-Xon4gpdpK7kz3631XK4Hgr1ls=" alt="" className="user__img"/>
        <div className="user__container">
          <h3 className="user__name">Anthony</h3>
          <p className="user__last-message">last message</p>
        </div>
      </li>
     </ul>
  </div>;
}

export default Search;
