import React, { useState, useEffect } from "react";
import "animate.css";

export const GifGridItem = ({ title, url }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  }, [copied]);

  return (
    <div
      className="card animate__animated animate__bounceIn"
      onClick={() => {
        navigator.clipboard.writeText(url);
        setCopied(true);
      }}
    >
      <img src={url} alt={title} />
      {copied ? <p className="green">Copied to clipboard!</p> : <p>{title}</p>}
    </div>
  );
};
