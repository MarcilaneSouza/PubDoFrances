import styled from "styled-components";

export const Button = styled.button`
  color: ${({ theme }) => theme.texto};
  box-sizing: border-box;
  font-size: 2rem;
  padding: auto;

  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.botao};

  border-radius: 12px;
  border: none;

  transition: box-shadow 0.8s;

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
