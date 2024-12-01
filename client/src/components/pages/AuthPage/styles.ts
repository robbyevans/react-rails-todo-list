import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  margin: 4rem auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
  position: relative;
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

/* Toast Message Styles */

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const ToastMessage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.success};
  color: #fff;
  padding: 1rem;
  text-align: center;
  animation: ${slideDown} 0.3s ease-out forwards,
    fadeOut 0.5s ease-out 2.5s forwards;
  z-index: 1000;

  @keyframes fadeOut {
    to {
      opacity: 0;
    }
  }
`;

const progressBar = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
`;

export const ProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  background-color: ${(props) => props.theme.colors.primaryDark};
  animation: ${progressBar} 3s linear forwards;
  width: 100%;
`;
