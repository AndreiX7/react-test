import React from "react";

const HOC = (Display) => (props) => {
  const color = ["gray", "lime", "blue", "yellow"];
  const randomColor = color[Math.floor(Math.random() * color.length)];

  return (
    <div style={{ backgroundColor: randomColor }}>
      <Display />
    </div>
  );
};

export default HOC;