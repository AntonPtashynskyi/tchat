import React from "react";

function InputPanel() {
  return <div className="input-panel">
    <input type="text" placeholder="enter your message" className="input-panel__input"/>
    <div className="input-panel__additional">
      {/* <input type="file"/> */}
      <button className="send-btn">SEND</button>
    </div>
  </div>;
}

export default InputPanel;
