import React, { useState } from "react";
import TotalData from "../TotalExpensesData_Componet/TotalData";

const BudgetInputForm = ({inputs}) => {
  const [budgetInputData, setBudgetInputData] = useState("");
  const [savedBudgetData, setSavedBudgetData] = useState("");

  //form submit Handler after submiting data will store on input
  const submitHandler = (event) => {
    event.preventDefault();
    setSavedBudgetData(budgetInputData);
    setBudgetInputData("");
  };
  //const budget=setSavedBudgetData
  // input data
  const buttonChangeHandler = (event) => {
    setBudgetInputData(event.target.value);
  };

  return (
    <div>
      <h3>Set Your Budget</h3>
      <form onSubmit={submitHandler}>
        <input
          type="number"
          value={budgetInputData}
          placeholder="Total Budget Amount"
          onChange={buttonChangeHandler}
        />
        <button type="submit">Set Budget</button>
      </form>
      {savedBudgetData && <TotalData/>}
      {savedBudgetData && <div> <p> Total Budget:{savedBudgetData}</p> 
          {/*<p>{inputs.cost}</p> */}
      </div>}
    </div>
  );
};

export default BudgetInputForm;
