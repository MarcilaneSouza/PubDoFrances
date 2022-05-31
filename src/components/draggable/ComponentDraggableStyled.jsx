import styled from "styled-components";

export const Draggable = styled.div`
  width: 50%;
  height: 50%;
  padding: auto auto;

  background-color: ${({ theme }) => theme.inside};
`;

export const InnerDraggable = styled.div.attrs(({ settings, theme }) => ({
  style: {
    position: settings.position,
    right: settings.right,
    bottom: settings.bottom,
    color: theme.texto,
  },
}))`
  box-sizing: border-box;
  padding: 2rem 2rem;

  background-color: ${({ theme }) => theme.inside};

  cursor: -webkit-grab;
  user-select: none;

  display: flex;
  gap: 0.6rem;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  border: solid ${({ theme }) => theme.borda};
  border-radius: 24px;
  transition: border 1s ease-in-out;

  :hover {
    border: solid ${({ theme }) => theme.botao};
  }
`;
