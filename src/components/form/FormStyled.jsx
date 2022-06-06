import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;
export const Fiedset = styled.fieldset`
  width: 100%;
  margin: 0 auto;
`;

export const Input = styled.input`
  box-sizing: border-box;
  color: ${({ theme }) => theme.textoSecundario};
  padding: 0.6rem;
  margin: 2px auto;
  height: 1.6rem;
  outline: none;
  border: 2px solid ${({ theme }) => theme.borda};
  border-radius: 5px;

  background-color: ${({ theme }) => theme.body};
  transition: all 0.6s;

  :focus {
    color: ${({ theme }) => theme.texto};
    background-color: ${({ theme }) => theme.borda};
  }
`;
