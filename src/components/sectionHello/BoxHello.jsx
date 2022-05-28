import styled from "styled-components";

const DivHello = styled.div`
  text-align: center;
  padding: 1rem;

  border: 2px solid ${({ theme }) => theme.borda};

  background-color: ${({ theme }) => theme.inside};
`;

const Hello = styled.p`
  color: ${({ secundary, theme }) =>
    secundary ? theme.textoSecundario : theme.texto};
  font-size: 1.1rem;
`;

export { Hello, DivHello };
