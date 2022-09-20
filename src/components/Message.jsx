import React from "react";

function Message() {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?k=20&m=1007763808&s=612x612&w=0&h=q4qlV-99EK1VHePL1-Xon4gpdpK7kz3631XK4Hgr1ls="
          alt=""
          className="message__img"
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p className="message__text">My new message, can text you</p>
      </div>
    </div>
  );
}

export default Message;
