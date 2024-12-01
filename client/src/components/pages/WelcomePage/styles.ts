import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 600px;
  margin: 4rem auto;
  padding: 2rem;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-top: 1rem;
`;

export const ActionButton = styled(Link)`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.8rem 1.5rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: #ffffff;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDark};
  }
`;
