import React, { useState } from "react";
import { BudgetAdd } from "./BudgetAdd";
import { BudgetList } from "./BudgetList";

export const BudgetPage = () => {
  const [budgets, setBudgets] = useState([
    // { id: 1, date: Date.now(), income: 1000, expenses: 200, amount: 800 },
    // { id: 2, date: Date.now(), income: 2000, expenses: 400, amount: 1600 },
    // { id: 3, date: Date.now(), income: 300, expenses: 1000, amount: -700 },
    // { id: 4, date: Date.now(), income: 1000, expenses: 1000, amount: 0 },
    // { id: 5, date: Date.now(), income: 1000, expenses: 900, amount: 100 }
  ]);

  function onCreate(income, expenses) {
    setBudgets(
      budgets.concat([
        {
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
        }
      ])
    );
  }

  return (
    <div>
      <BudgetAdd onCreate={onCreate} />
      <hr />
      {budgets.length ? <BudgetList budgets={budgets} /> : <p>No records</p>}
    </div>
  );
};
