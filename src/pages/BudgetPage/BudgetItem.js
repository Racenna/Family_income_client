import React from "react";

export const BudgetItem = ({ budget }) => {
  return (
    <tr>
      <td>{budget.date}</td>
      <td>{budget.income}</td>
      <td>{budget.expenses}</td>
      <td>{budget.amount}</td>
    </tr>
  );
};
