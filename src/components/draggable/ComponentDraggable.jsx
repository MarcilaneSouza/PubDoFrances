import React from "react";
import useDrag from "./useDrag";
import { Draggable, InnerDraggable } from "./ComponentDraggableStyled";
import { MdOutlineFullscreenExit, MdOutlineFullscreen } from "react-icons/md";
import { useState } from "react";
import { Button } from "../button/Button";

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
      >
        <Button onClick={() => SetIsOpen(!isOpen)}>
          {isOpen ? <MdOutlineFullscreenExit /> : <MdOutlineFullscreen />}
        </Button>       
        {isOpen ? component.open : component.close}
      </InnerDraggable>
    </Draggable>
  );
};

export default ComponentDraggable;
