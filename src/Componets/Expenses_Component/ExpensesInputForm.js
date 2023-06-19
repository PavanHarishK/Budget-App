import React, { useEffect, useState } from "react";
import ExpensesDisplayTable from "./ExpensesDisplayTable";
//import BudgetInputForm from "../Budget_Input_Component/BudgetInputForm";

const ExpensesInputForm = () => {
  const [title, setTitle] = useState("");
  const [cost, setCost] = useState("");
  const [inputs, setInputs] = useState("");

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

  //
  const submitHandler = (event) => {
    event.preventDefault();
    // storing all input data in newInputs object
    const newInputs = {
      title: title,
      cost: cost,
    };

    console.log(title);
    console.log(cost);
    console.log(inputs);
    setInputs([...inputs, newInputs]);
    setTitle("");
    setCost("");
  };

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
        <button type="submit">Check Amout</button>
      </form>
      {<ExpensesDisplayTable inputs={inputs} />}
      {/*{<BudgetInputForm inputs={inputs}/>} */}
    </div>
  );
};

export default ExpensesInputForm;
