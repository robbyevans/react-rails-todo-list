import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthPage from "./components/pages/AuthPage";
import TodoListPage from "./components/pages/TodoListPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/todolist" element={<TodoListPage />} />
      </Routes>
    </Router>
  );
};

export default App;
