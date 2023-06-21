import React, { useState } from "react";

const Budget = () => {
  const [budgetInputData, setBudgetInputData] = useState("");
  const [savedBudgetData, setSavedBudgetData] = useState("");
  const [title, setTitle] = useState("");
  const [cost, setCost] = useState("");
  const [inputs, setInputs] = useState("");


  //form submit Handler after submiting data will store on input
  const budgetInputSubmitHandler = (event) => {
    event.preventDefault();
    setSavedBudgetData(budgetInputData);
    setBudgetInputData("");
  };
  //const budget=setSavedBudgetData
  // input data
  const buttonChangeHandler = (event) => {
    setBudgetInputData(event.target.value);
  };
  // expense Input form
  //To change title
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
    setInputs({...inputs, newInputs});
    setTitle("");
    setCost("");
    
    //checking the budget and saving it to local storage
    const enteredAmount = parseInt(newInputs.cost)
    const budgetData = parseInt(savedBudgetData)
    console.log(enteredAmount)
    console.log(budgetData)
    
    if (enteredAmount <= budgetData) {
      let balanceAmount =  budgetData - enteredAmount;
        if(balanceAmount >= enteredAmount){
            balanceAmount = balanceAmount - enteredAmount
        }
        console.log(balanceAmount)
    } else {
      alert("You have already spent this amount");
      return;
    }
    
    console.log(newInputs)
  }


  return (
    <div>
      <h2>Budget App</h2>

      <form onSubmit={budgetInputSubmitHandler}>
        <h3>Set Your Budget</h3>
        <input
          type="number"
          value={budgetInputData}
          placeholder="Total Budget Amount"
          onChange={buttonChangeHandler}
        />
        <button type="submit">Set Budget</button>
      </form>
      {savedBudgetData && (
        <div>
          <p>Total Budget Amount : {savedBudgetData} </p>
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
    </div>
  );
};

export default Budget;
