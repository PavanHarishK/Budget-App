import React, { useState, useEffect } from "react";
import ExpensesDisplayTable from "./ExpensesDisplayTable";

const ExpensesInputForm = ({ savedBudgetData }, { index }) => {
  const [title, setTitle] = useState("");
  const [cost, setCost] = useState("");
  const [inputs, setInputs] = useState("");
  const [balanceAmount, setBalanceAmount] = useState("");

  // to store Inputs in JSON data
  useEffect(() => {
    localStorage.setItem("inputs", JSON.stringify(inputs));
  }, [inputs]);

  //To change title
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  //to change cost
  const costChangeHandler = (event) => {
    setCost(event.target.value);
  };
  // balace update
  const balanceAmountHandler = (balanceAmount) => {
    setBalanceAmount(() => {});
  };

  
  const submitHandler = (event) => {
    event.preventDefault();
    // storing all input data in newInputs object
    const newInputs = {
      title: title,
      cost: cost,
    };

    if (parseInt(newInputs.cost) <= savedBudgetData) {
      balanceAmountHandler();
      const balanceAmount =
        parseInt(savedBudgetData) - parseInt(newInputs.cost);
      console.log(balanceAmount);
    } else {
      alert("You have already spent this amount");
      return;
    }
    // console.log(title);
    // console.log(cost);
    //console.log(inputs);
    setInputs([...inputs, newInputs]);
    setTitle("");
    setCost("");
    // console.log(newInputs)
  };

  console.log(savedBudgetData);
  console.log(balanceAmount);
  console.log(index);
  return (
    <div>
      <h3>Expenses Input</h3>
      <form onSubmit={submitHandler}>
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
        <button type="submit" onClick={balanceAmountHandler}>
          Check Amout
        </button>
      </form>
      {inputs && <ExpensesDisplayTable inputs={inputs} />}

      {inputs && (
        <div>
          <div>
            <h5>Total Budget</h5>
            <p>{savedBudgetData}</p>
          </div>
          <div>
            <h5>Expenses</h5>
            <p>{}</p>
          </div>
          <div>
            <h5>Balance</h5>
            <h5>{balanceAmount}</h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpensesInputForm;