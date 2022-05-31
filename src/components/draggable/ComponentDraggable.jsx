import React from "react";
import useDrag from "./useDrag";
import { Draggable, InnerDraggable } from "./ComponentDraggableStyled";
import { useState } from "react";

const { innerHeight, innerWidth } = window;
const startingPosition = { x: innerWidth - 250, y: innerHeight / 2 - 100 };

const ComponentDraggable = ({ component }) => {
  const [isOpen, SetIsOpen] = useState(false);

  const { picturePosition, handleMouseDown, handleMouseMove, handleMouseUp } =
    useDrag(startingPosition);
  return (
    <Draggable>
      <InnerDraggable
        settings={picturePosition}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseMove}
        onMouseUp={handleMouseUp}
        onDoubleClick={() => SetIsOpen(!isOpen)}
      >
        {isOpen ? component : "Clique aqui"}
      </InnerDraggable>
    </Draggable>
  );
};

export default ComponentDraggable;
