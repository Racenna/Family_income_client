import React, { useState, useContext } from "react";
import { BudgetAdd } from "./BudgetAdd";
import { BudgetList } from "./BudgetList";
import { useHttp } from "../../hooks/httpHook";
import { AuthContext } from "../AuthPage/AuthContext";

export const BudgetPage = () => {
  const auth = useContext(AuthContext);
  const [budgets, setBudgets] = useState([]);
  const { request } = useHttp();

  async function onCreate(income, expenses) {
    const body = {
      id: Date.now() + (Math.random() * (10 - 1) + 1).toFixed(0),
      date:
        String(new Date().getDate()).padStart(2, "0") +
        "/" +
        String(new Date().getMonth() + 1).padStart(2, "0") +
        "/" +
        new Date().getFullYear(),
      income: +income,
      expenses: +expenses,
      amount: income - expenses
    };
    try {
      const data = await request(
        "/api/budget/create",
        "POST",
        { ...body },
        { Authorization: `Bearer ${auth.token}` }
      );
      console.log(data);
      // message(data.message);
    } catch (error) {
      console.log({ ...body });
    }
    setBudgets(budgets.concat([body]));
  }

  return (
    <div>
      <BudgetAdd onCreate={onCreate} />
      <hr />
      {budgets.length ? <BudgetList budgets={budgets} /> : <p>No records</p>}
    </div>
  );
};
