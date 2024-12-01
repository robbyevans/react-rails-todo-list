import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./components/pages/WelcomePage/welcomePage";
import AuthPage from "./components/pages/AuthPage/AuthPage";
import TodoListPage from "./components/pages/TodoListPage/TodoListPage";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/todolist" element={<TodoListPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
