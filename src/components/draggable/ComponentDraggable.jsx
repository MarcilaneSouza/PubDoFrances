import React from "react";
import { useState } from "react";
const imgURL = "https://picsum.photos/200/300";

const holderStyle = { width: "100%", height: "100%" };
const pictureStyle = {
  backgroundColor: "red",
  width: "200px",
  hieght: "200px",
};

const { innerHeight, innerWidth } = window;
const startingPosition = { x: innerWidth / 2 - 100, y: innerHeight / 2 - 100 };

export default () => {
  const [dragInfo, setDragInfo] = useState({
    isDragging: false,
    origin: { x: 0, y: 0 },
    translation: startingPosition,
    lastTranslation: startingPosition,
  });
  const { isDragging } = dragInfo;

  const handleMouseDown = ({ clientX, clientY }) => {
    if (!isDragging) {
      setDragInfo({
        ...dragInfo,
        isDragging: true,
        origin: { x: clientX, y: clientY },
      });
    }
  };

  const handleMouseMove = ({ clientX, clientY }) => {
    if (isDragging) {
      const { origin, lastTranslation } = dragInfo;
      setDragInfo({
        ...dragInfo,
        translation: {
          x: Math.abs(clientX - (origin.x + lastTranslation.x)),
          y: Math.abs(clientY - (origin.y + lastTranslation.y)),
        },
      });
    }
  };

  const handlMouseUp = () => {
    if (isDragging) {
      const { translation } = dragInfo;

      setDragInfo({
        ...dragInfo,
        isDragging: false,
        lastTranslation: { x: translation.x, y: translation.y },
      });
    }
  };
  const picturePosition = {
    position: "absolute",
    right: `${dragInfo.translation.x}px`,
    bottom: `${dragInfo.translation.y}px`,
  };

  return (
    <div style={holderStyle}>
      <img
        src={imgURL}
        style={{ ...pictureStyle, ...picturePosition }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseMove}
        onMouseUp={handlMouseUp}
      />
    </div>
  );
};
