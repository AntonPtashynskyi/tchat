import React from "react";
import { useState } from "react";
import "./_video.style.scss";

function Video() {
  const [show, setShow] = useState(false);

  const showInfo = () => setShow(!show);
  return (
    <div className="container">
      <div className="video-section">
        <div className="content-wrapper">
          <nav>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>What's new?</li>
            </ul>
            <div className="authBtn">
              <button>Login</button>
              <button>Register</button>
            </div>
          </nav>

          <ul className="videoContent">
            <li className={show ? "showInfo" : ""}>
              <div className="cover">
                <button onClick={showInfo}>{show ? "close" : "open"}</button>
              </div>
              <div className="videoInfo">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officiis quia reiciendi
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="text">
        <div className="content-wrapper"></div>
      </div>
    </div>
  );
}

export default Video;
