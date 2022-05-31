import styled from "styled-components";

export const Draggable = styled.div`
  width: 100%;
  height: 100%;
`;

export const InnerDraggable = styled.div.attrs(({ settings, theme }) => ({
  style: {
    position: settings.position,
    right: settings.right,
    bottom: settings.bottom,
    color: theme.texto,
  },
}))`
  width: 200px;
  height: 200px;
  font-size: 5rem;
  transition: all -1s;
  cursor: -webkit-grab;
`;
