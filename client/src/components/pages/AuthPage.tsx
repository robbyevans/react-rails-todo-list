import React, { useState, useEffect } from "react";
import { useUser } from "../../features/user/useUser"; // useUser hook to manage login and signup
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { login, signup, error, token } = useUser();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  // If the token is available, navigate to the todolist page
  useEffect(() => {
    if (token) {
      navigate("/todolist"); // Replace with your actual todolist route
    }
  }, [token, navigate]); // Run this when token or navigate changes

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      login(username, password); // Call login function
    } else {
      signup(username, password); // Call signup function
    }
  };

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="auth-container">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Create an account" : "Already have an account?"}
      </button>
    </div>
  );
};

export default AuthPage;
