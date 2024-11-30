import React from "react";
import { Link } from "react-router-dom";

const WelcomePage: React.FC = () => {
  return (
    <div className="welcome-container">
      <h1>Welcome to the Todo App!</h1>
      <p>Get started by logging in or signing up</p>
      <div className="action-buttons">
        <Link to="/auth">Login / Signup</Link>
      </div>
    </div>
  );
};

export default WelcomePage;
