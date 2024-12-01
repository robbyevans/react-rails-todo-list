import styled from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  margin: 4rem auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.text};
  font-size: 1.2rem;
  cursor: pointer;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  svg {
    margin-right: 0.5rem;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputField = styled.input`
  padding: 0.8rem;
  margin: 0.5rem 0;
  border: 1px solid #cccccc;
  border-radius: 5px;
`;

export const SubmitButton = styled.button`
  padding: 0.8rem 1.2rem;
  margin-top: 1rem;
  border: none;
  background-color: ${(props) => props.theme.colors.primary};
  color: #ffffff;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDark};
  }
`;

export const ToggleButton = styled.button`
  margin-top: 1rem;
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.info};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const ErrorMessage = styled.div`
  color: ${(props) => props.theme.colors.danger};
  margin-top: 1rem;
`;
