import React, { useState } from "react";
// import TotalData from "../TotalExpensesData_Componet/TotalData";
import ExpensesInputForm from "../Expenses_Component/ExpensesInputForm";

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
      <h2>Budget App</h2>
      
      <form onSubmit={submitHandler}>
        <h3>Set Your Budget</h3>
        <input
          type="number"
          value={budgetInputData}
          placeholder="Total Budget Amount"
          onChange={buttonChangeHandler}
        />
        <button type="submit">Set Budget</button>
      </form>
      {savedBudgetData && <ExpensesInputForm savedBudgetData = {savedBudgetData}/>}
      
    </div>
  );
};

export default BudgetInputForm;
