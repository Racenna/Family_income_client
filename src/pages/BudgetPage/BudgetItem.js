import React, { useContext } from "react";
import { BudgetContext } from "./BudgetContext";

export const BudgetItem = ({ budget }) => {
  const { deleteRecord } = useContext(BudgetContext);
  return (
    <tr>
      <td>{budget.date}</td>
      <td>{budget.income}</td>
      <td>{budget.expenses}</td>
      <td>{budget.amount}</td>
      <td>
        <button
          className="waves-effect waves-light btn"
          onClick={deleteRecord.bind(null, budget._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
