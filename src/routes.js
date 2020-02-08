import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { BudgetPage } from "./pages/BudgetPage/BudgetPage";

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      //Routes for user in system
      <Switch>
        <Route path="/budget" exact>
          <BudgetPage />
        </Route>
        <Redirect to="/budget" />
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
