import React from "react";
import AppRouter from "./router";
import { AuthProvider } from "./context/AuthContext";
import "./styles/global.scss";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export default App;
