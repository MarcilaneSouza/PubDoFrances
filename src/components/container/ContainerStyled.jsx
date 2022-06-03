import styled from "styled-components";

export const ContainerSection = styled.section`
  box-sizing: border-box;

  width: 100%;

  padding: 1rem 2rem;
`;

export const Borda = styled.div`
  width: 80%;
  height: 1px;
  margin: 0px auto;
  border-bottom: 2px solid ${({ theme }) => theme.borda};
`;
