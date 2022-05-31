import styled from "styled-components";

export const Button = styled.button`
  color: ${({ theme }) => theme.texto};
  box-sizing: border-box;
  font-size: 2rem;
  padding: auto;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.botao};
  border-radius: 15px;
  border: none;
  :hover {
    cursor: pointer;
  }
`;
