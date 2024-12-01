import React, { useState, useEffect } from "react";
import { useUser } from "../../../features/user/useUser";
import { useNavigate } from "react-router-dom";
import * as S from "./styles.ts";

import { FaArrowLeft } from "react-icons/fa";

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { login, signup, error, token } = useUser();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/todolist");
    }
  }, [token, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      login(username, password);
    } else {
      signup(username, password, passwordConfirmation);
    }
  };

  return (
    <S.Container>
      <S.BackButton onClick={() => navigate("/")}>
        <FaArrowLeft />
        Back
      </S.BackButton>
      <S.Title>{isLogin ? "Login" : "Sign Up"}</S.Title>
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
      <S.Form onSubmit={handleSubmit}>
        <S.InputField
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <S.InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!isLogin && (
          <S.InputField
            type="password"
            placeholder="Confirm Password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        )}
        <S.SubmitButton type="submit">
          {isLogin ? "Login" : "Sign Up"}
        </S.SubmitButton>
      </S.Form>
      <S.ToggleButton onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Create an account" : "Already have an account?"}
      </S.ToggleButton>
    </S.Container>
  );
};

export default AuthPage;
