import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 4rem auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Title = styled.h2``;

export const LogoutButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background-color: ${(props) => props.theme.colors.danger};
  color: #ffffff;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: ${(props) => props.theme.colors.dangerDark};
  }
`;

export const Form = styled.form`
  display: flex;
  margin-bottom: 1rem;
`;

export const InputField = styled.input`
  flex-grow: 1;
  padding: 0.8rem;
  border: 1px solid #cccccc;
  border-radius: 5px 0 0 5px;
`;

export const SubmitButton = styled.button`
  padding: 0.8rem 1.2rem;
  border: none;
  background-color: ${(props) => props.theme.colors.primary};
  color: #ffffff;
  cursor: pointer;
  border-radius: 0 5px 5px 0;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDark};
  }
`;

export const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;

export const ListItem = styled.li`
  background-color: #f2f2f2;
  padding: 0.8rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
`;

export const TaskTitle = styled.span`
  flex-grow: 1;
`;

export const TaskButtons = styled.div`
  button {
    margin-left: 0.5rem;
  }
`;

export const EditButton = styled.button`
  padding: 0.4rem 0.6rem;
  border: none;
  background-color: ${(props) => props.theme.colors.info};
  color: #ffffff;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: ${(props) => props.theme.colors.infoDark};
  }
`;

export const DeleteButton = styled.button`
  padding: 0.4rem 0.6rem;
  border: none;
  background-color: ${(props) => props.theme.colors.danger};
  color: #ffffff;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: ${(props) => props.theme.colors.dangerDark};
  }
`;
