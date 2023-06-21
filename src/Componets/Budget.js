import React, { useState } from "react";
import ExpensesDisplayTable from "./Expenses_Component/ExpensesDisplayTable";

const Budget = () => {
  const [budgetInputData, setBudgetInputData] = useState("");
  const [savedBudgetData, setSavedBudgetData] = useState("");
  const [balanceAmount, setBalanceAmount] = useState(0);
  const [LatestBalanceAmount, setLatestBalanceAmount] = useState("");
  const [title, setTitle] = useState("");
  const [cost, setCost] = useState("");
  const [inputs, setInputs] = useState("");


  //form submit Handler after submiting data will store on input
  const setBudgetHandler = (event) => {
    event.preventDefault();
    setSavedBudgetData(budgetInputData);
    setBudgetInputData("");
  };

  const budgetInputChangeHandler = (event) => {
    setBudgetInputData(event.target.value);
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  //to change cost
  const costChangeHandler = (event) => {
    setCost(event.target.value);
  };

  //balance Amount Handler


  const expensesInputSubmitHandler = (event) => {
    event.preventDefault();
    // storing all input data in newInputs object
    const newInputs = {
      title: title,
      cost: cost,
    };
    //checking the budget and saving it to local storage
    const enteredAmount = parseInt(newInputs.cost)
    const budgetData = parseInt(savedBudgetData)
    debugger;
    let aa = balanceAmount !==0 ? LatestBalanceAmount : budgetData;
    // let bl = balanceAmount;
    if (enteredAmount <= aa && LatestBalanceAmount !== 0) {
      if (balanceAmount === 0) {
        let amount = budgetData - enteredAmount;
        setBalanceAmount(amount);
        setLatestBalanceAmount(amount);
      }
      else {
        let amount = balanceAmount - enteredAmount;
        setBalanceAmount(amount);
        setLatestBalanceAmount(amount);
      }
      setInputs([...inputs, newInputs]);
      setTitle("");
      setCost("");
    }
    else {
      alert("You have already spent this amount");
      return;
    }
  }

  return (
    <div>
      <h2>Budget App</h2>

      <form onSubmit={setBudgetHandler}>
        <h3>Set Your Budget</h3>
        <input
          type="number"
          value={budgetInputData}
          placeholder="Total Budget Amount"
          onChange={budgetInputChangeHandler}
        />
        <button type="submit">Set Budget</button>
      </form>
      {savedBudgetData && (
        <div>
          <p>Total Budget Amount : {savedBudgetData} </p>
          <p>Total Balance Amount : {LatestBalanceAmount} </p>
          <div>
            <h3>Expenses Input</h3>
            <form onSubmit={expensesInputSubmitHandler}>
              <input
                type="text"
                value={title}
                placeholder="Enter Title"
                onChange={titleChangeHandler}
              />
              <input
                type="number"
                value={cost}
                placeholder="Enter Cost"
                onChange={costChangeHandler}
              />
              <button type="submit" onClick={expensesInputSubmitHandler}>
                Check Amout
              </button>
            </form>
          </div>
        </div>
      )}
      {inputs && <ExpensesDisplayTable inputs={inputs} />}
    </div>
  );
};

export default Budget;
