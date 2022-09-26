import React from "react";
import VideoCard from "./assets/VideoCard";

import "./_video.style.scss";

function Video() {
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
          <VideoCard
            read="Lorem ipsum dolor sit amet consectetur"
            more="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            doloremque magni ipsa nisi Lorem ipsum dolor sit amet.lorem5 Lorem
            ipsum dolor sit amet."
          />

          {/* 
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
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Video;
