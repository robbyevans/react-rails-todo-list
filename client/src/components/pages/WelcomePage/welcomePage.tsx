import React from "react";

import * as S from "./styles";

const WelcomePage: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Welcome to the Todo App!</S.Title>
      <S.Subtitle>Get started by logging in or signing up</S.Subtitle>
      <S.ActionButton to="/auth">Login / Signup</S.ActionButton>
    </S.Container>
  );
};

export default WelcomePage;
