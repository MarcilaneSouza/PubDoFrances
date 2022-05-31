import React from "react";
import useDrag from "./useDrag";
import { Draggable, InnerDraggable } from "./ComponentDraggableStyled";

const { innerHeight, innerWidth } = window;
const startingPosition = { x: innerWidth / 2 - 100, y: innerHeight / 2 - 100 };

const ComponentDraggable = () => {
  const {
    picturePosition,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    isDragging,
  } = useDrag(startingPosition);
  return (
    <Draggable>
      <InnerDraggable
        settings={picturePosition}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseMove}
        onMouseUp={handleMouseUp}
        onDoubleClick={() => console.log(isDragging)}
      >
        testes
      </InnerDraggable>
    </Draggable>
  );
};

export default ComponentDraggable;
