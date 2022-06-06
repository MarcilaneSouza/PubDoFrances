import styled from "styled-components";

export const ContainerSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  box-sizing: border-box;
  width: 100%;
  padding: 1rem 4rem;
`;

export const H = styled.h1`
font-size: 2.2rem;
color: #EA7C69;
align-self: center;
`;

export const Ol = styled.ol`
display: flex;
flex-direction: column;
justify-content: space-between;
`;

export const Li = styled.li`
align-content: center;
font-size: 1.6rem;
padding: 1rem;
`;

export const P = styled.p`
font-size:1.8rem;
align-self: center;
`;

export const A = styled.a`
color: #EA7C69;
transition: width 3s;
`;

export const Span = styled.span`
font-size: 1.9rem;
color: #EA7C69;
`;

export const Borda = styled.div`
  width: 80%;
  height: 1px;
  margin: 2px auto;
  border-bottom: 2px solid ${({ theme }) => theme.borda};
`;
