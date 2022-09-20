import React from "react";
import Messages from "./Messages";
import InputPanel from "./InputPanel";

function Chat() {
  return (
    <div className="messages">
      <div className="chats-info">
        <p className="chats-info__name">Anthony</p>
      </div>
      <Messages />
      <InputPanel />
    </div>
  );
}

export default Chat;
