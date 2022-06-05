import styled from "styled-components";

export const Button = styled.button`
  color: ${({ theme }) => theme.texto};
  box-sizing: border-box;
  margin: 0.2rem;
  padding: 0.3rem;
  font-size: inherit;

  display: flex;
  justify-content: center;

  background-color: ${({ theme }) => theme.botao};

  border-radius: 12px;
  border: none;

  transition: box-shadow 0.4s;

  :hover {
    cursor: pointer;

    box-shadow: inset 0 0 2px #fff,
      inset 2px 0 2px ${({ theme }) => theme.botao},
      inset -2px 0 2px ${({ theme }) => theme.botao},
      inset 2px 0 2px ${({ theme }) => theme.botao},
      inset -2px 0 2px ${({ theme }) => theme.botao},
      0 0 2px ${({ theme }) => theme.botao},
      -2px 0 2px ${({ theme }) => theme.botao},
      2px 0 2px ${({ theme }) => theme.botao};
  }
`;
