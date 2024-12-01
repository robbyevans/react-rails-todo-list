import React, { useState, useEffect } from "react";
import { useUser } from "../../../features/user/useUser";
import { useNavigate } from "react-router-dom";
import * as S from "./styles.ts";
import { FaArrowLeft } from "react-icons/fa";

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { handleLogin, handleSignup, error, status, isUserAuthenticated } =
    useUser();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (isUserAuthenticated) {
      navigate("/todolist");
    }
  }, [isUserAuthenticated, navigate]);

  useEffect(() => {
    if (status === "loading") {
      setToastMessage(isLogin ? "Logging in..." : "Signing up...");
      setShowToast(true);
    } else if (status === "succeeded") {
      setToastMessage(isLogin ? "Login successful!" : "Signup successful!");
      setShowToast(true);
    } else if (status === "failed") {
      setToastMessage(error || "An error occurred.");
      setShowToast(true);
    }
  }, [status, error, isLogin]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      handleLogin(username, password);
    } else {
      handleSignup(username, password, passwordConfirmation);
    }
  };

  return (
    <S.Container>
      {showToast && (
        <S.ToastMessage onAnimationEnd={() => setShowToast(false)}>
          {toastMessage}
          <S.ProgressBar />
        </S.ToastMessage>
      )}
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
