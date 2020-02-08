import React, { useState } from "react";

export const BudgetAdd = ({ onCreate }) => {
  //income value
  const [valueI, setValueI] = useState("");
  //expenses value
  const [valueE, setValueE] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    onCreate(valueI, valueE);
    setValueI("");
    setValueE("");
  }

  return (
    <div className="row addf">
      <form className="col s12" onSubmit={submitHandler}>
        <div className="row">
          <div className="input-field col s6">
            <input
              id="income"
              type="number"
              value={valueI}
              onChange={e => setValueI(e.target.value)}
            />
            <label htmlFor="income">Income</label>
          </div>
          <div className="input-field col s6">
            <input
              id="expenses"
              type="number"
              value={valueE}
              onChange={e => setValueE(e.target.value)}
            />
            <label htmlFor="expenses">Expenses</label>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
