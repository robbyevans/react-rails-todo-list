import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./components/pages/welcomePage"; // New WelcomePage component
import AuthPage from "./components/pages/AuthPage"; // AuthPage with login/signup options
import TodoListPage from "./components/pages/TodoListPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/todolist" element={<TodoListPage />} />
      </Routes>
    </Router>
  );
};

export default App;
