import React from "react";
import "../style/base.style.scss";
import Chats from "./Chats"

function Chat() {
  return <div className="chat">
    <div className="chats-info">
      <p className="chats-info__name">Anthony</p>
      <ul className="chats-info__additional" >
        <li>VIDEO</li>
        <li>ADD</li>
        <li>MORE</li>
      </ul>
    </div>
    <Chats/>
  </div>;
}

export default Chat;
