import styled from "styled-components";
import { darkMetal, vermelho } from "../../styles";

export const Boxpresentation = styled.article`
  width: 60%;
  margin-left: 3%;
  box-sizing: border-box;

  position: absolute;
  top: 18.5rem;

  display: flex;
  flex-direction: column;
  gap: 3px;
  gap: 5px;
`;
export const ApresentacaoDestaque = styled.p`
  color: ${({ theme }) => theme.texto};
  font-size: 3.1rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px ${darkMetal}, 3px 3px 5px ${vermelho};
  word-break: break-word;
`;

export const Apresentacao = styled.span`
  margin-left: 1.5rem;
  font-weight: bold;
  font-size: 2.1rem;
  text-shadow: 4px 4px 4px ${darkMetal};
`;
