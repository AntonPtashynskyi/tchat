import React from "react";
import { useState, useEffect, useRef } from "react";

import "./_videCard.style.scss";

function VideoCard({ read, more }) {
  const [open, setOpen] = useState(false);

  const card = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!card.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div className="video" ref={card}>
      <button className="video__btn" onClick={() => setOpen(!open)}>
        {open ? "X" : "V"}
      </button>
      <div className="video__image"></div>
      <div className={open ? "video__text active" : "video__text"}>
        <p>{read}</p>
        <p className="read-more">{more}</p>
      </div>
    </div>
  );
}

export default VideoCard;
