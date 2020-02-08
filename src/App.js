import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useRoutes } from "./routes";
import { useAuth } from "./hooks/authHook";
import { AuthContext } from "./pages/AuthPage/AuthContext";
import { Navbar } from "./pages/Navbar/Navbar";
import "materialize-css";

function App() {
  const { token, login, logout } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        isAuthenticated
      }}
    >
      <BrowserRouter>
        {isAuthenticated && <Navbar />}
        <div className="container">{routes}</div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
