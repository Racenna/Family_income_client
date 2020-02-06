import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage";

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      //Routes for user in system
      <Switch>
        <Route path="/link" exact>
          //some page
        </Route>
        <Redirect to="/somelink" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
