import React from "react";
import InputPanel from "./InputPanel"
import Messages from "./Messages";

function Chats() {
  return <div className='chats'>
    <Messages/>
    <InputPanel/>
  </div>;
}

export default Chats;
