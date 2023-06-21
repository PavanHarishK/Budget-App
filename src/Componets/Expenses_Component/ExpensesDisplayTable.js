import React, { useState } from "react";

const ExpensesDisplayTable = ({ inputs }) => {

  const [index,setIndex]=useState('')

  if (!inputs || inputs.length === 0) {
    return null;
  }

  const expensesItemsCount =(index)=>{
    setIndex(index +1)
  }
  
  return (
    <div>
      <h3>Expenses table</h3>
      {inputs.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Expenses Title</th>
              <th>Expenses Cost</th>
            </tr>
          </thead>
          <tbody>
            {inputs.map((inputs, index) => (
              <tr key={index}>
                <td>{inputs.title}</td>
                <td>{inputs.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExpensesDisplayTable;
