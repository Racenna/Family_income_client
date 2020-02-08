import React from "react";
import { BudgetItem } from "./BudgetItem";

export const BudgetList = props => {
  return (
    <table className="striped">
      <thead>
        <tr>
          <th>Date</th>
          <th>Income</th>
          <th>Expenses</th>
          <th>Amount</th>
        </tr>
      </thead>

      <tbody>
        {props.budgets.map(item => (
          <BudgetItem key={item._id} budget={item} />
        ))}
      </tbody>
    </table>
  );
};
